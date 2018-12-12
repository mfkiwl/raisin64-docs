ANDI - Bitwise AND Immediate
============================

ANDs ``$rs1`` with an immediate value, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   and $rd, $rs1, imm

Operation
---------

.. code-block:: c

   rd = rs1 & imm;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 3
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0xAC
:64-bit Opcode: 0xEC

.. raw:: latex

    \clearpage

