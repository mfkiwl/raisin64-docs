DIVI - Integer Divide Immediate
===============================

Divides register ``Rs1`` by an immediate value and places the quotient in ``Rd`` and the remainder in ``Rd2``.  Because this instruction requires three registers and an immediate value, it is only available in 64S format.

Usage
-----

.. code-block:: asm

   div Rd, Rd2, Rs1, imm

Operation
---------

.. code-block:: c

   Rd = Rs1 / imm;
   Rd2 = Rs1 % imm;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 0
:Op: 3

:16-bit Opcode: NONE
:32-bit Opcode: NONE
:64-bit Opcode: 0xE3
