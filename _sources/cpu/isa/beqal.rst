BEQAL - Branch if Equal And Link
================================

Branches if the ``Rs`` register is equal to the ``Rd`` register by a signed displacement in the immediate field.  The address of the next linear instruction is placed as a return address in ``r63``.  As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.

.. tip:: An unconditional branch can be accomplished by using the zero register ``r0``.

Usage
-----

.. code-block:: asm

   beqal Rd, Rs, imm

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
