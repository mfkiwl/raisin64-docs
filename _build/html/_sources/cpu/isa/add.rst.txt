ADD - Integer Add
=================

Adds registers ``$rs1`` and ``$rs2``, placing the result in ``$rd``.

Usage
-----

.. code-block:: asm

   add $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = rs1 + rs2;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 0
:Op: 0

:16-bit Opcode: 0x0
:32-bit Opcode: 0x80
:64-bit Opcode: 0xC0


.. raw:: latex

    \clearpage

