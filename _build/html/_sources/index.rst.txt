.. Raisin64 documentation master file, created by
   sphinx-quickstart on Sun Oct  7 16:04:37 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to Raisin64's documentation!
====================================

Raisin64 (*RISC Architecture with In-order Superscalar INterlocked-pipeline*) is a pure 64-bit CPU design created as part of an educational project.  Inspired by the architecture of  the `MIPS R10000 <https://en.wikipedia.org/wiki/R10000>`_ and `POWER3 <https://en.wikipedia.org/wiki/POWER3>`_, Raisin64 employs multiple specialized pipelines for integer operations, branching, load/store, etc. presently using a simplified issue system appropriate for the scope of a semester-long project.

Unlike most superscalar designs, Raisin64 does not re-order instructions or use register renaming [1]_ but instead provides a larger architectural register file of 63x64-bit registers.

Major features of the Raisin64 include:

:Bits: 64-bit
:Instructions: :ref:`50 Opcodes (with 16, 32, and 64-bit formats) <cpu/isa:Raisin64 Instruction Set>`
:Design: RISC (Harvard Architecture [2]_)
:Type: Register-Register
:Branching: Compare and Branch
:Endianness: Big
:Registers: 63 (R0 = 0)

.. image:: _static/raisin64block.png
    :width: 100%
    :alt: High-level CPU block diagram

The various repositories hosting the source-code described in this document are available here:

===================== ====================
Metaproject           `<https://github.com/ChrisPVille/raisin64>`_
CPU RTL               `<https://github.com/ChrisPVille/raisin64-cpu>`_
Binutils              `<https://github.com/ChrisPVille/raisin64-binutils>`_
Nexys4DDR Example     `<https://github.com/ChrisPVille/raisin64-nexys4ddr>`_
Binutils              `<https://github.com/ChrisPVille/raisin64-binutils>`_
OpenOCD               `<https://github.com/ChrisPVille/raisin64-openocd>`_
Docs Source           `<https://github.com/ChrisPVille/raisin64-docs>`_
PDF Documentation     `<https://raisin64.fsys.io/_build/latex/Raisin64.pdf>`_
===================== ====================

.. Full TOC for the PDF and index
.. toctree::
   :maxdepth: 4
   :hidden:
   
   cpu
   software
   tools
   nexysddr
   modules

Footnotes
---------

.. [1] Raisin64 will always issue instructions in-order but may do so before previous ones have finished executing provided they are dependency-free and the appropriate execution unit is available.
.. [2] `Split-Cache Modified Harvard <https://en.wikipedia.org/wiki/Modified_Harvard_architecture>`_ when
        :ref:`proposed caches and MMU <cpu:Proposed Extensions>` are introduced.
