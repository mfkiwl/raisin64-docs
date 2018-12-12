SW - Store 64-bit Word
======================

Store 64-bit word ``$rd`` into the address located in ``$rs1`` offset by a signed immediate value.

Usage
-----

.. code-block:: asm

   sw $rd, imm($rs1)

Operation
---------

.. code-block:: c

   *(rs+imm)   = rd[63:56];
   *(rs+imm+1) = rd[55:48];
   *(rs+imm+2) = rd[47:40];
   *(rs+imm+3) = rd[39:32];
   *(rs+imm+4) = rd[31:24];
   *(rs+imm+5) = rd[23:16];
   *(rs+imm+6) = rd[15:8];
   *(rs+imm+7) = rd[7:0];
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 6
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0xB8
:64-bit Opcode: 0xF8


.. raw:: latex

    \clearpage

