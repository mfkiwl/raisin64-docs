SGTU - Set 1 if Greater Than Unsigned
=====================================

Sets ``$rd`` as 1 if the unsigned representation of ``$rs1`` is greater than the unsigned representation of ``$rs2``, 0 otherwise.

Usage
-----

.. code-block:: asm

   sgtu $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   if((unsigned)rs1 > (unsigned)rs2)
      rd = 1;
   else
      rd = 0;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 1
:Op: 3

:16-bit Opcode: NONE
:32-bit Opcode: 0x87
:64-bit Opcode: 0xC7


.. raw:: latex

    \clearpage

