LW - Load 64-bit Word
=====================

Loads 64-bit word from address ``$rs1`` offset by a signed immediate value and places it into ``$rd``.

Usage
-----

.. code-block:: asm

   lw $rd, imm($rs1)

Operation
---------

.. code-block:: c

   rd[63:56] = *(rs+imm);
   rd[55:48] = *(rs+imm+1);
   rd[47:40] = *(rs+imm+2);
   rd[39:32] = *(rs+imm+3);
   rd[31:24] = *(rs+imm+4);
   rd[23:16] = *(rs+imm+5);
   rd[15:8]  = *(rs+imm+6);
   rd[7:0]   = *(rs+imm+7);
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 4
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0xB0
:64-bit Opcode: 0xF0


.. raw:: latex

    \clearpage

