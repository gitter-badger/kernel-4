initSidebarItems({"constant":[["DPL","Descriptor priveliege level bitfield."],["DPL_RING_0","Bit indicating that the descriptor priveliege level is Ring 0"],["DPL_RING_1","Bit indicating that the descriptor priveliege level is Ring 1"],["DPL_RING_2","Bit indicating that the descriptor priveliege level is Ring 2"],["DPL_RING_3","Bit indicating that the descriptor priveliege level is Ring 3"],["ENTRIES","Number of entries in the system's Interrupt Descriptor Table."],["INT_GATE_16","Set if this is an interrupt gate."],["INT_GATE_32","Set if this is an interrupt gate and points to a 32-bit ISR."],["LONG_MODE","Set if this `Gate` points to a 32-bit ISR."],["PRESENT","Set to 0 for unused interrupts."],["SEGMENT","Storage segment flag."],["TASK_GATE_32","Set if this is a 32-bit task gate."],["TRAP_GATE_16","Set if this is a trap gate."],["TRAP_GATE_32","Set if this is a trap gate that points to a 32-bit ISR"]],"mod":[["gate","64-bit IDT gate implementation"]],"struct":[["Gate","An IDT entry is called a gate."],["GateFlags","Bitflags field in an IDT gate."],["Idt","An Interrupt Descriptor Table"]]});