DIV - Integer Divide
====================

Divides registers ``Rs1`` by ``Rs2``, and places the quotient in ``Rd`` and the remainder in ``Rd2``, treating operands as 2's complement signed.

Usage
-----

.. code-block:: asm

   div Rd, Rd2, Rs1, Rs2

Operation
---------

.. code-block:: c

   Rd = Rs1 / Rs2;
   Rd2 = Rs1 % Rs2;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 4
:Op: 2

:16-bit Opcode: NONE
:32-bit Opcode: 0x92
:64-bit Opcode: 0xD2

.. raw:: latex

    \clearpage

