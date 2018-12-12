BEQ - Branch if Equal
=====================

If the ``$rs1`` register is equal to the ``$rd`` register, the program branches by the signed immediate displacement.  As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.

.. tip:: An unconditional branch can be accomplished by comparing ``$zero`` with itself.

Usage
-----

.. code-block:: asm

   beq $rd, $rs1, imm

Operation
---------

.. code-block:: c

   if(rd == rs)
      pc = pc+(imm<<1);
   else
      advance_pc();

Encoding
--------

:Type: 1
:Unit: 7
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0xBC
:64-bit Opcode: 0xFC

.. raw:: latex

    \clearpage

