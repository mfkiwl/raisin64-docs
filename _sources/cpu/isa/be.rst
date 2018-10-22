BE - Branch if Even
===================

Branches if the ``Rs`` register is even.  An unconditional branch can be accomplished by using ``$r0`` as zero is even.   As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.

Usage
-----

.. code-block:: asm

   be Rs, imm

Operation
---------

.. code-block:: c

   if(is_even(Rs))
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
