AND - Bitwise AND
=================

ANDs ``$rs1`` with ``$rs2``, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   and $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = rs1 & rs2;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 3
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: 0x8C
:64-bit Opcode: 0xCC

.. raw:: latex

    \clearpage

