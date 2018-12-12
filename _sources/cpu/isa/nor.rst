NOR - Bitwise NOR
=================

NORs ``$rs1`` with ``$rs2``, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   nor $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = ~(rs1|rs2);
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 3
:Op: 1

:16-bit Opcode: NONE
:32-bit Opcode: 0x8D
:64-bit Opcode: 0xCD


.. raw:: latex

    \clearpage

