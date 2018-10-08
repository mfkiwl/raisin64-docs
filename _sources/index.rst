.. Raisin64 documentation master file, created by
   sphinx-quickstart on Sun Oct  7 16:04:37 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to Raisin64's documentation!
====================================

Raisin64 (*RISC Architecture with In-order Superscalar INterlocked-pipeline*) is a pure 64-bit CPU design created as part of an educational project.  Architecturally similar to the `MIPS R10000 <https://en.wikipedia.org/wiki/R10000>`_ and `POWER3 <https://en.wikipedia.org/wiki/POWER3>`_, Raisin64 is a superscalar design that employs multiple specialized pipelines for integer operations, floating point, load/store, etc.  Unlike most superscalar designs, Raisin64 does not re-order instructions but instead provides a larger architectural register file of 64x64-bit registers.

The various repositories contain the CPU itself, 

Major features of the Raisin64 include:

- **Bits:** 64-bit
- **Design:** RISC
- **Type:** Register-Register
- **Branching:** Condition Code
- **Endianness:** Big
- **Page Size:** 16KB Fixed
- **Virtual Address Size:** 47-Bits
- **Page Table:** Three Level
- **Registers:** 61 (R0 = 0)

.. toctree::
   :maxdepth: 2
   :caption: Contents:
   
   cpu
   software
   tools
   nexysddr
   
   
Indices and tables
==================

* :ref:`genindex`
