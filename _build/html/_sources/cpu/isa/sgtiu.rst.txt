SGTIU - Set 1 if Greater Than Immediate Unsigned
================================================

Sets ``$rd`` as 1 if the unsigned representation of ``$rs1`` is greater than the unsigned immediate field, 0 otherwise.

Usage
-----

.. code-block:: asm

   sgtiu $rd, $rs1, imm

Operation
---------

.. code-block:: c

   if((unsigned)rs1 > (unsigned)imm)
      rd = 1;
   else
      rd = 0;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 1
:Op: 3

:16-bit Opcode: NONE
:32-bit Opcode: 0xA7
:64-bit Opcode: 0xE7


.. raw:: latex

    \clearpage

