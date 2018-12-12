SUB - Integer Subtract
======================

Subtracts register ``$rs2`` from ``$rs1``, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   sub $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = rs1 - rs2;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 0
:Op: 1

:16-bit Opcode: 0x1
:32-bit Opcode: 0x81
:64-bit Opcode: 0xC1


.. raw:: latex

    \clearpage

