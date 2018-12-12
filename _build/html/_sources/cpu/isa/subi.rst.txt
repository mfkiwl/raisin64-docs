SUBI - Integer Subtract Immediate
=================================

Subtracts a sign-extended immediate value from register ``$rs1``, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   subi Rd, Rs1, imm

Operation
---------

.. code-block:: c

   Rd = Rs1 - sign_extend(imm);
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 0
:Op: 1

:16-bit Opcode: 0x3
:32-bit Opcode: 0xA1
:64-bit Opcode: 0xE1


.. raw:: latex

    \clearpage

