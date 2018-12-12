J - Jump
========

Unconditional jump to the instruction in ``$rs1``.

Usage
-----

.. code-block:: asm

   j $rs1

Operation
---------

.. code-block:: c

   pc = rs1;

Encoding
--------

:Type: 0
:Unit: 7
:Op: 2

:16-bit Opcode: 0x5
:32-bit Opcode: 0x9E
:64-bit Opcode: 0xDE

.. raw:: latex

    \clearpage

