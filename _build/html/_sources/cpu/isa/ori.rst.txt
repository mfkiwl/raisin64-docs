ORI - Bitwise OR Immediate
==========================

ORs ``$rs1`` with an immediate value, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   ori $rd, $rs1, imm

Operation
---------

.. code-block:: c

   rd = rs1 | imm;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 3
:Op: 2

:16-bit Opcode: NONE
:32-bit Opcode: 0xAE
:64-bit Opcode: 0xEE


.. raw:: latex

    \clearpage

