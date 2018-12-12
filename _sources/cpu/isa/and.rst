AND - Bitwise AND
=================

Bitwise ANDs registers ``Rs1`` and ``Rs2``, placing the result in ``Rd``.

Usage
-----

.. code-block:: asm

   and Rd, Rs1, Rs2

Operation
---------

.. code-block:: c

   Rd = Rs1 & Rs2;
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

