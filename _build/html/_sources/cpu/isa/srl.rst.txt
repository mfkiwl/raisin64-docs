SRL - Shift Right Logical
=========================

Shift the contents of register ``$rs1`` right by a number of bits specified in ``$rs2``, storing the result in ``$rd``

Usage
-----

.. code-block:: asm

   srl $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = rs1>>rs2;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 2
:Op: 2

:16-bit Opcode: NONE
:32-bit Opcode: 0x8A
:64-bit Opcode: 0xC8


.. raw:: latex

    \clearpage

