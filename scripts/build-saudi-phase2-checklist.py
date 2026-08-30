#!/usr/bin/env python3
"""Builds public/saudi-e-invoicing-phase-2-checklist.xlsx from the shared JSON.

The page at /knowledge/saudi-e-invoicing-phase-2-checklist imports the same
JSON. Edit app/_data/saudi-einvoicing-phase-2-checklist.json, then re-run:

    pip install openpyxl && python3 scripts/build-saudi-phase2-checklist.py
"""

from _checklist_xlsx import build

build(
    src_name="saudi-einvoicing-phase-2-checklist.json",
    out_name="saudi-e-invoicing-phase-2-checklist.xlsx",
    title="Saudi e-invoicing Phase 2 readiness checklist",
    subtitle="{total} checks across scope, invoice data, cryptography, the two flows and controls",
    sheet="Phase 2 readiness",
    extra=(
        "Daftar is not a certified e-invoicing solution provider. The checks are task-level rather "
        "than a restatement of ZATCA's technical specification, which is versioned and updated. "
        "Confirm every requirement against the current specification, the applicable regulations, "
        "and any notification issued to you."
    ),
)
