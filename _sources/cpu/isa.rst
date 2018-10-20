Raisin64 Instruction Set
========================
   
.. contents:: :local:

Overview
--------

The Raisin64's instruction set draws heavily from MIPS with some concepts graciously borrowed from ARM as well.  While the programmer's model and instruction set are decoupled from the underlying microarchitecture of the specific implementation, it was nonetheless decided to design the instructions such that a hardwired control unit (see TODO:ref:`Instruction Decode`) could process and set the appropriate signals.

Instructions are variable length (16-64) bit, and some have multiple forms like the :ref:`ADD Instruction <cpu/isa/add:ADD - Integer Add>`.  When an instruction has multiple encodings, the opcode is usually the same between the alternate length versions of that instruction, but in all cases the processor expands the 16 and 32-bit versions of the instruction into their canonical 64-bit form, which has a regular encoding.  The general instruction formats and opcodes are described below.

.. admonition:: But Why?

   There is a natural appeal to 64 registers on a 64-bit machine.  This means 6 bits are needed in the instruction format to address each register.  While 64-bit instructions allow this and efficient loading of immediate values, they waste program space more often than not.  Variable length instructions are a good compromise to avoid the size penalty when not necessary.

Instruction Format
------------------

There are 6 instruction formats in Raisin64

.. bitfields:: 16r.json
   :alt: 16R
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 600
   :bits: 16
   
.. bitfields:: 16i.json
   :alt: 16I
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 600
   :bits: 16
   
.. bitfields:: 32r.json
   :alt: 32R
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 900
   :bits: 32
   
.. bitfields:: 32i.json
   :alt: 32I
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 900
   :bits: 32
   
.. bitfields:: 64s.json
   :alt: 64S
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 1200
   :bits: 64
   
.. bitfields:: 64j.json
   :alt: 64J
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 1200
   :bits: 64

Instructions
------------

.. toctree::
   :glob:

   isa/*
