ADD - Integer Add
=================

Adds registers ``Rs1`` and ``Rs2``, placing the result in ``Rd``.

Usage
-----

.. code-block:: asm

   add Rd, Rs1, Rs2

Operation
---------

.. code-block:: c

   Rd = Rs1 + Rs2;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 0
:Op: 0

:16-bit Opcode: 0x0
:32-bit Opcode: 0x80
:64-bit Opcode: 0xC0

