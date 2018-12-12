SLLI - Shift Left Logical Immediate
===================================

Shift the contents of register ``$rs1`` left by a number of bits specified in the immediate field, storing the result in ``$rd``

Usage
-----

.. code-block:: asm

   slli $rd, $rs1, imm

Operation
---------

.. code-block:: c

   rd = rs1<<imm;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 2
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0xA8
:64-bit Opcode: 0xE8


.. raw:: latex

    \clearpage

