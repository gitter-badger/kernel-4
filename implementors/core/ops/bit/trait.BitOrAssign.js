(function() {var implementors = {};
implementors["arrayvec"] = [];
implementors["cpu"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"cpu/control_regs/cr0/struct.Flags.html\" title=\"struct cpu::control_regs::cr0::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"cpu/control_regs/cr4/struct.Flags.html\" title=\"struct cpu::control_regs::cr4::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"cpu/segment/struct.Selector.html\" title=\"struct cpu::segment::Selector\">Selector</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"cpu/segment/struct.Flags.html\" title=\"struct cpu::segment::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"cpu/segment/struct.DataFlags.html\" title=\"struct cpu::segment::DataFlags\">DataFlags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"cpu/segment/struct.CodeFlags.html\" title=\"struct cpu::segment::CodeFlags\">CodeFlags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"cpu/flags/struct.Flags.html\" title=\"struct cpu::flags::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"cpu/interrupts/idt/struct.GateFlags.html\" title=\"struct cpu::interrupts::idt::GateFlags\">GateFlags</a>",];
implementors["elf"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"elf/section/struct.Flags.html\" title=\"struct elf::section::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"elf/section/struct.GroupFlags.html\" title=\"struct elf::section::GroupFlags\">GroupFlags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"elf/program/struct.Flags.html\" title=\"struct elf::program::Flags\">Flags</a>",];
implementors["memory"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.PAddr.html\" title=\"struct memory::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.PAddr.html\" title=\"struct memory::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;u64&gt; for <a class=\"struct\" href=\"memory/struct.PAddr.html\" title=\"struct memory::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.PhysicalPage.html\" title=\"struct memory::PhysicalPage\">PhysicalPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.PhysicalPage.html\" title=\"struct memory::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.PhysicalPage.html\" title=\"struct memory::PhysicalPage\">PhysicalPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.PhysicalPage.html\" title=\"struct memory::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;usize&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>",];
implementors["paging"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"paging/arch/table/struct.EntryFlags.html\" title=\"struct paging::arch::table::EntryFlags\">EntryFlags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/section/struct.Flags.html\" title=\"struct elf::section::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"elf/section/struct.Flags.html\" title=\"struct elf::section::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/section/struct.GroupFlags.html\" title=\"struct elf::section::GroupFlags\">GroupFlags</a>&gt; for <a class=\"struct\" href=\"elf/section/struct.GroupFlags.html\" title=\"struct elf::section::GroupFlags\">GroupFlags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/program/struct.Flags.html\" title=\"struct elf::program::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"elf/program/struct.Flags.html\" title=\"struct elf::program::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;u64&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;usize&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>",];
implementors["sos_alloc"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;u64&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;usize&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/section/struct.Flags.html\" title=\"struct elf::section::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"elf/section/struct.Flags.html\" title=\"struct elf::section::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/section/struct.GroupFlags.html\" title=\"struct elf::section::GroupFlags\">GroupFlags</a>&gt; for <a class=\"struct\" href=\"elf/section/struct.GroupFlags.html\" title=\"struct elf::section::GroupFlags\">GroupFlags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/program/struct.Flags.html\" title=\"struct elf::program::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"elf/program/struct.Flags.html\" title=\"struct elf::program::Flags\">Flags</a>",];
implementors["sos_kernel"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a> for <a class=\"struct\" href=\"sos_kernel/io/keyboard/struct.Modifiers.html\" title=\"struct sos_kernel::io::keyboard::Modifiers\">Modifiers</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/section/struct.Flags.html\" title=\"struct elf::section::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"elf/section/struct.Flags.html\" title=\"struct elf::section::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/section/struct.GroupFlags.html\" title=\"struct elf::section::GroupFlags\">GroupFlags</a>&gt; for <a class=\"struct\" href=\"elf/section/struct.GroupFlags.html\" title=\"struct elf::section::GroupFlags\">GroupFlags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"elf/program/struct.Flags.html\" title=\"struct elf::program::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"elf/program/struct.Flags.html\" title=\"struct elf::program::Flags\">Flags</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;u64&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;usize&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
