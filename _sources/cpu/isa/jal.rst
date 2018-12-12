JAL - Jump and Link
===================

Unconditional jump to the instruction in ``$rs1``, placing the return address in ``$r63``.

Usage
-----

.. code-block:: asm

   jal $rs1

Operation
---------

.. code-block:: c

   r63 = next_pc();
   pc = rs;

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

