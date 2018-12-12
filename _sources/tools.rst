Tools
=====

Being a completely new computer architecture and instruction set, there are were no ready-made tools available for assembly, disassembly, linking, debugging, etc.  In the spirit of bootstrapping a new system, it was decided early that if the eventual goal is to run a general purpose operating system on the machine, GCC will be required.  GCC leverages `binutils <https://www.gnu.org/software/binutils/>`_, a collection of assembly tools, ELF and object file manipulation utilities, as well as a powerful linker.

Using the preliminary instruction set decided early in the semester, binutils was ported to the Raisin64 ISA while the processor was still being designed.  Using an existing target (the `moxie <http://moxielogic.org/blog/pages/architecture.html>`_ as a template, the initial port of binutils was made functional by creating/modifying 26 files across the source.

.. admonition:: Future Work

   The current Raisin64 GNU Assembler port only constructs the 64-bit version of the instruction set.  While the linker, disassembler, and other infrastructure tools should support the smaller instruction words (with some testing done to that effect), the assembler will require significant work outside the scope of the present semester.

While the template architecture was noted for it's reasonable size (architecture definitions and assembler were in the many-hundred-line range instead of the tens-of-thousands range for MIPS and X86), the Raisin64 is quite dissimilar being 64-bit with an entirely different instruction scheme.  The `actual assembler core <https://github.com/ChrisPVille/raisin64-binutils/blob/raisin64/gas/config/tc-raisin64.c>`_ was largely rewritten in what became a deep exploration of the binutils architecture.

Assembler
---------

Being a port of binutils, the Raisin64 assembler should be familiar and comfortable to use for an assembly language programmer supporting the full set of `GNU As <https://sourceware.org/binutils/docs/as/index.html>`_ features.  An effort was made to support MIPS-like syntax with ``$r0`` or ``$zero`` register numbering

**Named Registers:**

========== ========== =======================================
Number     Name       Purpose
---------- ---------- ---------------------------------------
``$r0``    ``$zero``  Zero Register
``$r62``   ``$sp``    Stack Pointer (no special meaning to processor/convention only)
``$r63``   ``$lr``    Link Register (Destination for :ref:`JAL <cpu/isa/jal:JAL - Jump and Link>`/:ref:`BEQAL <cpu/isa/beqal:BEQAL - Branch if Equal And Link>`/etc.)
========== ========== =======================================

The assembler can be invoked as usual for GNU As:

.. parsed-literal::
   raisin64-elf-as <input file> -o <output.elf>

which will produce an ELF that can be manipulated with objdump, objcopy, etc.

An example of the assembly process is in `assemble.sh <https://github.com/ChrisPVille/raisin64-cpu/blob/master/support/assemble.sh>`_ which takes an input assembly file, produces the assembled ELF, extracts the ``.text`` and ``.data`` sections (containing the instruction and data memories respectively), and converts them from hex to ASCII using the xxd utility.  The result is suitable for the ``$readmemh`` Verilog commands:

.. code-block:: shell

    raisin64-elf-as $1 -o prog.elf &&
    raisin64-elf-objdump -s -j .data prog.elf &&
    raisin64-elf-objdump -d -j .text prog.elf &&
    raisin64-elf-objcopy -O binary -j .text prog.elf imem.bin &&
    raisin64-elf-objcopy -O binary -j .data prog.elf dmem.bin &&
    xxd -c 8 -ps imem.bin > imem.hex &&
    xxd -c 8 -ps dmem.bin > dmem.hex

Binary Release
^^^^^^^^^^^^^^

A binary release of the Raisin64 binutils was prepared, compatible with most 64-bit linux systems: `<https://github.com/ChrisPVille/raisin64-binutils/releases>`_

Building from Source
^^^^^^^^^^^^^^^^^^^^

The Raisin64 port can be obtained here: `<https://github.com/ChrisPVille/raisin64-binutils>`_.

Binutils is mostly free from external dependencies out of necessity, so it should build without too much drama.  Just be sure to configure it for the ``raisin64-elf`` target. i.e.:

.. parsed-literal::
   ./configure --target=raisin64-elf --prefix=<install directory>
   make -j<threads>

Debugging
---------

As the Raisin64 was designed with a from-scratch JTAG controller I wrote recently (the `JTAGlet <https://github.com/ChrisPVille/jtaglet>`_), there was no existing support in any tools.  Not that JTAG core support would help much given the new ISA, but keeping with the bootstrap theme, a custom configuration script for `OpenOCD <http://openocd.org/>`_ was created that uses/misuses the scripting interface to provide communication with the processor's JTAG interface, program the memories, and examine the state of the machine.

.. admonition:: Future Work

    While the scripting interface was a quick way to support my target, the conventional approach is to write support for targets and JTAG controller in C, releasing a new version of OpenOCD (much like I did with binutils).  This will be necessary to support remote debugging (via GDB) and will make future development easier.

The configuration script is too large to repeat here, but is accessible at `<https://github.com/ChrisPVille/raisin64-cpu/blob/master/support/jtag/raisin64_nodeps_openocd.cfg>`_.  It is currently configured for a `Bus Blaster v3 <https://www.seeedstudio.com/Bus-Blaster-v3-p-1415.html>`_, but can be easily reconfigured for other JTAG probes.

This script is be invoked by the adjacent ``programImemDmem.sh <imem.hex> <optional dmem.hex>`` or as:

.. code-block:: shell

    openocd -f "raisin64_nodeps_openocd.cfg" -c "init; raisin64_program <imem.hex> <optional dmem.hex>; exit"

The full set of implemented functions are:

====================== ============================== =======================================
Name                   Arguments                      Purpose
---------------------- ------------------------------ ---------------------------------------
raisin64_halt          none                           Halts the CPU (**Required** before dumping memory)
raisin64_resume        none                           Un-Halts the CPU
raisin64_reset         none                           Resets the CPU
raisin64_program       <imem.hex> <dmem.hex>          Programs Instruction and Data memory, resetting CPU
raisin64_dump_dmem     <addr> <size>                  Dumps the contents of Data memory
raisin64_dump_imem     <addr> <size>                  Dumps the contents of Instruction memory
====================== ============================== =======================================

Getting OpenOCD
^^^^^^^^^^^^^^^

As the present time, any modern version of OpenOCD can be used along with the script file for the Raisin64.
Official releases are at: `<http://openocd.org/getting-openocd/>`_
The future Raisin64 version will be located: `<https://github.com/ChrisPVille/raisin64-openocd>`_
