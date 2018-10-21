BO - Branch if Odd
==================

Branches if the ``Rs`` register is odd.  This is useful in conjunction with the set type instructions (SEQ, SLE, etc.) to branch on a positive result as 1 is odd.

Usage
-----

.. code-block:: asm

   bo Rs, imm

Operation
---------

.. code-block:: c

   if(is_odd(Rs))
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
