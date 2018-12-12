SRA - Shift Right Arithmetic
============================

Shift the contents of register ``$rs1`` right by a number of bits specified in ``$rs2``, sign-extending the value from ``$rs1`` and storing the result in ``$rd``

Usage
-----

.. code-block:: asm

   sra $rd, $rs1, $rs2

Operation
---------

.. code-block:: c

   rd = sign_extend(rs1)>>rs2;
   advance_pc();

Encoding
--------

:Type: 0
:Unit: 2
:Op: 1

:16-bit Opcode: NONE
:32-bit Opcode: 0x89
:64-bit Opcode: 0xC9


.. raw:: latex

    \clearpage

