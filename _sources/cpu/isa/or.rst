OR - Bitwise OR
===============

ORs ``$rs1`` with ``$rs2``, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   or $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = rs1 | rs2;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 3
:Op: 2

:16-bit Opcode: NONE
:32-bit Opcode: 0x8E
:64-bit Opcode: 0xCE


.. raw:: latex

    \clearpage

