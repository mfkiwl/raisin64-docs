SRLI - Shift Right Logical Immediate
====================================

Shift the contents of register ``$rs1`` right by a number of bits specified in the immediate field, storing the result in ``$rd``

Usage
-----

.. code-block:: asm

   srli $rd, $rs1, imm

Operation
---------

.. code-block:: c

   rd = rs1>>imm;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 2
:Op: 2

:16-bit Opcode: NONE
:32-bit Opcode: 0xAA
:64-bit Opcode: 0xEA


.. raw:: latex

    \clearpage

