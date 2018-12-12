SLTIU - Set 1 if Less Than Immediate Unsigned
=============================================

Sets ``$rd`` as 1 if the unsigned representation of ``$rs1`` is less than the unsigned immediate field, 0 otherwise.

Usage
-----

.. code-block:: asm

   sltiu $rd, $rs1, imm

Operation
---------

.. code-block:: c

   if((unsigned)rs1 < (unsigned)imm)
      rd = 1;
   else
      rd = 0;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 1
:Op: 1

:16-bit Opcode: NONE
:32-bit Opcode: 0xA5
:64-bit Opcode: 0xE5


.. raw:: latex

    \clearpage

