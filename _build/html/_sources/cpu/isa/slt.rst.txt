SLT - Set 1 if Less Than
========================

Sets ``$rd`` as 1 if the signed representation of ``$rs1`` is less than the signed representation of ``$rs2``, 0 otherwise.

Usage
-----

.. code-block:: asm

   slt $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   if((signed)rs1 < (signed)rs2)
      rd = 1;
   else
      rd = 0;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 1
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0x84
:64-bit Opcode: 0xC4


.. raw:: latex

    \clearpage

