LUI - Load Upper Immediate
==========================

Loads the immediate value into the upper 32 bits of ``$rd``.

Usage
-----

.. code-block:: asm

   lui $rd, imm

Operation
---------

.. code-block:: c

   rd = imm << 32;
   advance_pc();

Encoding
--------

:Type: 1
:Unit: 5
:Op: 0

:16-bit Opcode: NONE
:32-bit Opcode: NONE
:64-bit Opcode: 0xF4


.. raw:: latex

    \clearpage

