JAL - Jump and Link
===================

Unconditional jump to the instruction in ``Rs``, placing the return address in ``r63``.  As instructions must be aligned to 16-bit boundaries, the immediate value is left shifted by 1 before the jump.

Usage
-----

.. code-block:: asm

   jal Rs

Operation
---------

.. code-block:: c

   r63 = next_pc();
   pc = Rs;

Encoding
--------

:Type: 0
:Unit: 7
:Op: 3

:16-bit Opcode: 0x6
:32-bit Opcode: 0x9F
:64-bit Opcode: 0xDF

.. raw:: latex

    \clearpage

