ADDI - Integer Add Immediate
============================

Adds registers ``$rs1`` and a sign-extended immediate value, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   addi Rd, Rs1, imm

Operation
---------

.. code-block:: c

   Rd = Rs1 + sign_extend(imm);
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 0
:Op: 0

:16-bit Opcode: 0x2
:32-bit Opcode: 0xA0
:64-bit Opcode: 0xE0

.. raw:: latex

    \clearpage

