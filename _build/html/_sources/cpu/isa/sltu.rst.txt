SLTU - Set 1 if Less Than Unsigned
==================================

Sets ``$rd`` as 1 if the unsigned representation of ``$rs1`` is less than the unsigned representation of ``$rs2``, 0 otherwise.

Usage
-----

.. code-block:: asm

   sltu $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   if((unsigned)rs1 < (unsigned)rs2)
      rd = 1;
   else
      rd = 0;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 1
:Op: 1

:16-bit Opcode: NONE
:32-bit Opcode: 0x85
:64-bit Opcode: 0xC5


.. raw:: latex

    \clearpage

