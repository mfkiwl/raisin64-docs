XORI - Bitwise XOR Immediate
============================

XORs ``$rs1`` with an immediate value, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   xori $rd, $rs1, imm

Operation
---------

.. code-block:: c

   rd = rs1 ^ imm;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 3
:Op: 3

:16-bit Opcode: NONE
:32-bit Opcode: 0xAF
:64-bit Opcode: 0xEF


.. raw:: latex

    \clearpage

