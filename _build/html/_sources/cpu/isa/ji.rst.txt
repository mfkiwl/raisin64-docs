JI - Jump Immediate
===================

Unconditional jump to the immediate value.  The top 16 bits of the jump destination address are taken from the current program counter.  As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.  Due to the size of the immediate value, JI is only available in 64J format.

Usage
-----

.. code-block:: asm

   ji imm

Operation
---------

.. code-block:: c

   pc = (pc & 0xffff000000000000) | imm<<1;

Encoding
--------

:Type: 1
:Unit: 7
:Op: 3

:16-bit Opcode: NONE
:32-bit Opcode: NONE
:64-bit Opcode: 0xFF
