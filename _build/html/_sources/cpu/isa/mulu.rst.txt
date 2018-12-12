MULU - Unsigned Integer Multiply
================================

Multiplies registers ``$rs1`` and ``$rs2``, and places the results in ``$rd`` and ``$rd2``, treating operands as unsigned.

Usage
-----

.. code-block:: asm

   mulu $rd, $rd2, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = bottom_64bits(rs1 * rs2);
   rd2 = upper_64bits(rs1 * rs2);
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 4
:Op: 1

:16-bit Opcode: NONE
:32-bit Opcode: 0x91
:64-bit Opcode: 0xD1


.. raw:: latex

    \clearpage

