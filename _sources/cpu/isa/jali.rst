JALI - Jump and Link Immediate
==============================

Unconditional jump to the immediate value, placing the return address in ``r63``.  The top 8 bits of the jump destination address are taken from the current program counter.  As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.  Due to the size of the immediate value, JALI is only available in 64J format.

Usage
-----

.. code-block:: asm

   jali imm

Operation
---------

.. code-block:: c

   r63 = pc + 8;
   pc = (pc & 0xff00000000000000) | imm<<1;

Encoding
--------

:Type: 1
:Unit: 7
:Op: 3

:16-bit Opcode: NONE
:32-bit Opcode: NONE
:64-bit Opcode: 0xFF

.. raw:: latex

    \clearpage

