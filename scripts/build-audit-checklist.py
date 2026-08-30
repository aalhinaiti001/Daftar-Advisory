#!/usr/bin/env python3
"""Builds public/audit-readiness-checklist.xlsx from the shared checklist JSON.

The page at /knowledge/audit-readiness-checklist imports the same JSON, so the
page and the workbook cannot drift. Edit app/_data/audit-readiness-checklist.json,
then re-run:

    pip install openpyxl && python3 scripts/build-audit-checklist.py
"""

from _checklist_xlsx import build

build(
    src_name="audit-readiness-checklist.json",
    out_name="audit-readiness-checklist.xlsx",
    title="Audit readiness checklist",
    subtitle="{total} checks across the close, schedules, judgments, controls and the request list",
    sheet="Audit readiness",
    extra=(
        "It does not replace the requirements of the applicable auditing standards. Confirm what "
        "your audit requires against the issued standards and your auditor's own request list."
    ),
)
