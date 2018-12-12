SGTI - Set 1 if Greater Than Immediate
======================================

Sets ``$rd`` as 1 if the signed representation of ``$rs1`` is greater than the signed immediate field, 0 otherwise.

Usage
-----

.. code-block:: asm

   sgti $rd, $rs1, imm

Operation
---------

.. code-block:: c

   if((signed)rs1 > (signed)imm)
      rd = 1;
   else
      rd = 0;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 1
:Op: 2

:16-bit Opcode: NONE
:32-bit Opcode: 0xA6
:64-bit Opcode: 0xE6


.. raw:: latex

    \clearpage

