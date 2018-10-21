ANDI - Bitwise AND Immediate
============================

Bitwise ANDs register ``Rs1`` and an immediate value, placing the result in ``Rd``.

Usage
-----

.. code-block:: asm

   andi Rd, Rs1, imm

Operation
---------

.. code-block:: c

   Rd = Rs1 & imm;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 3
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0xAC
:64-bit Opcode: 0xEC
