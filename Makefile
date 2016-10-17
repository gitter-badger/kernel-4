arch ?= x86_64
target ?= $(arch)-sos-kernel-gnu

iso := target/$(target)/debug/sos-$(arch).iso
kernel := target/$(target)/debug/sos_kernel
isofiles := target/$(target)/debug/isofiles

grub_cfg := src/arch/$(arch)/grub.cfg

TIMESTAMP := $(shell /bin/date "+%Y-%m-%d-%H:%M:%S")

#COLORS
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
# A category can be added with @category
HELP_FUN = \
    %help; \
    while(<>) { push @{$$help{$$2 // 'options'}}, [$$1, $$3] if /^([a-zA-Z\-]+)\s*:.*\#\#(?:@([a-zA-Z\-]+))?\s(.*)$$/ }; \
    print "usage: make [target]\n\n"; \
    for (sort keys %help) { \
    print "${WHITE}$$_:${RESET}\n"; \
    for (@{$$help{$$_}}) { \
    $$sep = " " x (20 - length $$_->[0]); \
    print "  ${YELLOW}$$_->[0]${RESET}$$sep${GREEN}$$_->[1]${RESET}\n"; \
    }; \
    print "\n"; }

.PHONY: all clean kernel run iso cargo help gdb test doc

doc: ##@utilities Make RustDoc documentation
	@xargo doc

help: ##@miscellaneous Show this help.
	@perl -e '$(HELP_FUN)' $(MAKEFILE_LIST)

all: kernel

env: ##@utilities Install dev environment dependencies
	./scripts/install-env.sh

clean: ##@utilities Delete all build artefacts.
	@xargo clean

kernel: $(kernel).bin ##@build Compile the kernel binary

iso: $(iso) ##@build Compile the kernel binary and make an ISO image

run: $(iso) ##@build Make the kernel ISO image and boot QEMU from it.
	@qemu-system-x86_64 -s -hda $(iso)

debug: $(iso) ##@build Run the kernel, redirecting serial output to a logfile.
	@qemu-system-x86_64 -s -hda $(iso) -serial file:$(CURDIR)/target/$(target)/serial-$(TIMESTAMP).log

test: ##@build Test crate dependencies
	@xargo test -p sos_intrusive
	@cd sos_alloc && xargo test

$(iso): $(kernel).bin $(grub_cfg)
	@mkdir -p $(isofiles)/boot/grub
	@cp $(kernel).bin $(isofiles)/boot/
	@cp $(grub_cfg) $(isofiles)/boot/grub
	@grub-mkrescue -o $(iso) $(isofiles)/
	@rm -r $(isofiles)

$(kernel):
	@xargo build --target $(target)

$(kernel).debug: $(kernel)
	@x86_64-elf-objcopy --only-keep-debug $(kernel) $(kernel).debug

$(kernel).bin: $(kernel) $(kernel).debug
	@x86_64-elf-strip -g -o $(kernel).bin $(kernel)
	@x86_64-elf-objcopy --add-gnu-debuglink=$(kernel).debug $(kernel)

gdb: $(kernel).bin $(kernel).debug ##@utilities Connect to a running QEMU instance with gdb.
	@rust-gdb -ex "target remote tcp:127.0.0.1:1234" $(kernel)
