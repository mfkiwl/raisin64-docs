BEQ - Branch if Equal
=====================

If the ``Rs`` register is equal to the ``Rd`` register, the program branches by the signed immediate displacement.  As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.

.. tip:: An unconditional branch can be accomplished by comparing ``r0`` with itself.

Usage
-----

.. code-block:: asm

   beq Rd, Rs, imm

Operation
---------

.. code-block:: c

   if(Rd == Rs)
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

