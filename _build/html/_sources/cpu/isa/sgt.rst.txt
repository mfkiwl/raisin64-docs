SGT - Set 1 if Greater Than
===========================

Sets ``$rd`` as 1 if the signed representation of ``$rs1`` is greater than than the signed representation of ``$rs2``, 0 otherwise.

Usage
-----

.. code-block:: asm

   sgt $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   if((signed)rs1 > (signed)rs2)
      rd = 1;
   else
      rd = 0;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 1
:Op: 2

:16-bit Opcode: NONE
:32-bit Opcode: 0x86
:64-bit Opcode: 0xC6


.. raw:: latex

    \clearpage

