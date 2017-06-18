(function() {var implementors = {};
implementors["arrayvec"] = [];
implementors["memory"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.PAddr.html\" title=\"struct memory::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.PAddr.html\" title=\"struct memory::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;u64&gt; for <a class=\"struct\" href=\"memory/struct.PAddr.html\" title=\"struct memory::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.PhysicalPage.html\" title=\"struct memory::PhysicalPage\">PhysicalPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.PhysicalPage.html\" title=\"struct memory::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.PhysicalPage.html\" title=\"struct memory::PhysicalPage\">PhysicalPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.PhysicalPage.html\" title=\"struct memory::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;usize&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>",];
implementors["paging"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;usize&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;u64&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>",];
implementors["sos_alloc"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;usize&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;u64&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>",];
implementors["sos_kernel"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;usize&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VAddr.html\" title=\"struct memory::VAddr\">VAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PhysicalPage.html\" title=\"struct memory::arch::x86_64::PhysicalPage\">PhysicalPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;&lt;&lt;<a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a> as <a class=\"trait\" href=\"memory/trait.Page.html\" title=\"trait memory::Page\">Page</a>&gt;::<a class=\"type\" href=\"memory/trait.Page.html#associatedtype.Address\" title=\"type memory::Page::Address\">Address</a> as <a class=\"trait\" href=\"memory/trait.Addr.html\" title=\"trait memory::Addr\">Addr</a>&gt;::<a class=\"type\" href=\"memory/trait.Addr.html#associatedtype.Repr\" title=\"type memory::Addr::Repr\">Repr</a>&gt; for <a class=\"struct\" href=\"memory/struct.VirtualPage.html\" title=\"struct memory::VirtualPage\">VirtualPage</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;u64&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.DivAssign.html\" title=\"trait core::ops::arith::DivAssign\">DivAssign</a>&lt;<a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"memory/arch/x86_64/struct.PAddr.html\" title=\"struct memory::arch::x86_64::PAddr\">PAddr</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
