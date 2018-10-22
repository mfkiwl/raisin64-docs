J - Jump
========

Unconditional jump to the instruction in ``Rs``.  As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.

Usage
-----

.. code-block:: asm

   j Rs

Operation
---------

.. code-block:: c

   pc = Rs;

Encoding
--------

:Type: 0
:Unit: 7
:Op: 3

:16-bit Opcode: 0x5
:32-bit Opcode: 0x9F
:64-bit Opcode: 0xDF
