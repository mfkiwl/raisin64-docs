BEQAL - Branch if Equal And Link
================================

If the ``$rs1`` register is equal to the ``$rd`` register, the program branches by the signed immediate displacement.  The address of the next linear instruction is placed as a return address in ``r63``.  As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.

.. tip:: An unconditional branch can be accomplished by comparing ``$zero`` with itself.

Usage
-----

.. code-block:: asm

   beqal $rd, $rs1, imm

Operation
---------

.. code-block:: c

   if(Rd == Rs)
      r63 = next_pc();
      pc = pc+(imm<<1);
   else
      advance_pc();

Encoding
--------

:Type: 1
:Unit: 7
:Op: 1

:16-bit Opcode: NONE
:32-bit Opcode: 0xBD
:64-bit Opcode: 0xFD

.. raw:: latex

    \clearpage

