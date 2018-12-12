L8S - Load 8-bit Sign-Extend
============================

Loads 8-bit word from address ``$rs1`` offset by a signed immediate value and places it into ``$rd``.

Usage
-----

.. code-block:: asm

   l8s $rd, imm($rs1)

Operation
---------

.. code-block:: c

   rd[63:8] = sign_bit(*(rs+imm));
   rd[7:0]  = *(rs+imm);
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 5
:Op: 3

:16-bit Opcode: NONE
:32-bit Opcode: 0xB7
:64-bit Opcode: 0xF7


.. raw:: latex

    \clearpage

