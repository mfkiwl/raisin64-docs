Raisin64 CPU
============

Overview
--------

The Raisin64 CPU

Pipeline Stages
---------------

Fetch Unit
++++++++++

Decode Unit
+++++++++++

Register File
+++++++++++++

Schedule Unit
+++++++++++++

Execution Units
+++++++++++++++

Integer Unit
^^^^^^^^^^^^

Advanced Integer Unit
^^^^^^^^^^^^^^^^^^^^^

Branch Unit
^^^^^^^^^^^

Memory Unit
^^^^^^^^^^^

Commit Unit
+++++++++++


Debug Unit
----------

Proposed Extensions
-------------------

.. admonition:: Future Work

   While out-of-scope for the present period of the project, some initial development was done on Caches_, an MMU_, and `Interrupt Unit`_, primarily to ensure that they can be integrated into the design without significant modification to the processing pipeline.

   These extensions will make the processor capable of running a general purpose operating system (such as Linux) without resorting to software emulation of customarily present hardware.

MMU
+++

Nearly all general purpose operating systems depend on a `Memory Management Unit <https://en.wikipedia.org/wiki/Memory_management_unit>`_ to provide the virtual addressing used by userspace processes [1]_ [2]_.  The MMU presents each process with an illusory linear address space potentially overlapping with many other processes.  Along with the `Translation Lookaside Buffer <https://en.wikipedia.org/wiki/Translation_lookaside_buffer>`_, an MMU critically allows processes to be placed at arbitrary physical addresses (wherever the RAM happens to be free), with pages of that physical memory mapped at whatever virtual addresses the process expects.

In the Raisin64, the MMU also acts as the first point where the instruction and data caches have a unified window into physical memory, making the processor a split-cache Harvard architecture.  Beyond the `page tables <https://en.wikipedia.org/wiki/Page_table>`_ which are conventionally placed in main memory, the MMU control registers will be present in the machine's memory-map and be accessible in a kernel-mode un-mapped region (that is, the memory addresses used to access the registers will never be mapped by the MMU and will always be passed through without translation).

**Proposed MMU Specs:**

:Page Size: 16KB Fixed
:VA Width: 47-Bits sign-extended
:Page Table: Three Level (3x 11-bit entries and 15-bit offset)

The virtual addressing scheme takes inspiration from several modern processor designs as a way to constrain the number of legal virtual addresses while not inhibiting the physical address space available to the MMU.  While the virtual addresses are 64-bits, bits 63:47 must be sign-extended (i.e. replicated) from bit 46.  This breaks the address space into several proposed regions:

========================================= ====================================
Address                                   Purpose
----------------------------------------- ------------------------------------
0xFFFFFFFF_FFFFFFFF - 0xFFFFC000_00000000 Kernel-Mode Mapped
0xFFFFBFFF_FFFFFFFF - 0xFFFF8000_00000000 Kernel-Mode Unmapped
0xFFFF7FFF_FFFFFFFF - 0x00008000_00000000 Invalid
0x00007FFF_FFFFFFFF - 0x00000000_00000000 User-Mode Mapped
========================================= ====================================

The following figure from ARM on the MIPS processor's memory map conveys the general principle of using the kernel-mode unmapped segment to allow access to IO registers (MMU configuration included) which are present at a fixed physical address:

.. figure:: _static/mipsmap.png
   :alt: MIPS Memory Segments

   From ARM AN235 Section 3.4 [3]_

Interrupt Unit
++++++++++++++

An Interrupt/Exception unit will be necessary to properly implement virtual memory.  Attempting to access an unmapped, evicted, or privilaged page from a userspace process should cause the operating system to take over and mitigate the situation (either by loading the page or terminating the process).

The Raisin64's processing pipeline will need some modifications to the `Commit Unit`_ although first steps have already been taken to add a mechanism allowing register and memory writes to be deferred and re-ordered.  This can be expanded with program counter tracking information to ensure that the precise location of an interrupt can be recovered and the processor did not commit the pending results of an issued instruction later in the (now aborted) instruction stream.

Caches
++++++

Relatively simple compared to the MMU or Interrupt Unit, caches will likely have the largest impact on performance of the processor.  As the processing pipeline uses a Harvard architecture, the first level of caching is made up of a separate Instruction and Data cache.  Each will sit on their respective data ports and provide a small number of highly/fully associative entries that are `virtually indexed and virtually tagged <https://en.wikipedia.org/wiki/CPU_cache#Address_translation>`_.

This scheme will necessitate the flushing of the cache on a context switch, but as the only known implementations of the Raisin64 are on FPGAs (without the benefit of hardware content-addressable memory), the caches need to be small regardless and flushing their content on a context-switch will affect only a small number of entries.

**Proposed Cache Specs:**

:L1 Cache: Split Instruction/Data
:L1 Data: Small N-Way/Fully Associative
:L1 Instruction: Small N-Way/Fully Associative
:L1 Tag Scheme: Virtually Indexed, Virtually Tagged
:L2 Cache: Large Unified 2-Way Set Associative
:L2 Tag Scheme: Physically Indexed, Physically Tagged

While a second level cache between the MMU and main memory may be advantageous, the (comparatively) slow clock rates available from an FPGA but with full speed hardware-accelerated RAM access may eliminate any benefit of another cache.

References
++++++++++
.. [1] https://www.kernel.org/doc/Documentation/nommu-mmap.txt
.. [2] https://wiki.netbsd.org/projects/project/mmu-less/
.. [3] http://infocenter.arm.com/help/topic/com.arm.doc.dai0235c/index.html#arm_toc13
