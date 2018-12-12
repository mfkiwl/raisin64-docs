SRAI - Shift Right Arithmetic Immediate
=======================================

Shift the contents of register ``$rs1`` right by a number of bits specified in the immediate field, sign-extending the value from ``$rs1`` and storing the result in ``$rd``

Usage
-----

.. code-block:: asm

   srai $rd, $rs1, imm

Operation
---------

.. code-block:: c

   rd = sign_extend(rs1)>>imm;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 2
:Op: 1

:16-bit Opcode: NONE
:32-bit Opcode: 0xA9
:64-bit Opcode: 0xE9


.. raw:: latex

    \clearpage

