DIV - Integer Divide
====================

Divides registers ``$rs1`` by ``$rs2``, and places the quotient in ``$rd`` and the remainder in ``$rd2``, treating operands as 2's complement signed.

Usage
-----

.. code-block:: asm

   div $rd, $rd2, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = rs1 / rs2;
   rd2 = rs1 % rs2;
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

