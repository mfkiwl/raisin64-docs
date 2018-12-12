SLTI - Set 1 if Less Than Immediate
===================================

Sets ``$rd`` as 1 if the signed representation of ``$rs1`` is less than the signed immediate field, 0 otherwise.

Usage
-----

.. code-block:: asm

   slti $rd, $rs1, imm

Operation
---------

.. code-block:: c

   if((signed)rs1 < (signed)imm)
      rd = 1;
   else
      rd = 0;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 1
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0xA4
:64-bit Opcode: 0xE4


.. raw:: latex

    \clearpage

