NORI - Bitwise NOR Immediate
============================

NORs ``$rs1`` with an immediate value, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   nori $rd, $rs1, imm

Operation
---------

.. code-block:: c

   rd = ~(rs1|imm);
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 3
:Op: 1

:16-bit Opcode: NONE
:32-bit Opcode: 0xAD
:64-bit Opcode: 0xED


.. raw:: latex

    \clearpage

