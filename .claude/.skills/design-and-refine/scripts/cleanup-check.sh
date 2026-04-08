#!/bin/bash

# Design & Refine Cleanup Check Script
# Runs at session end to check for leftover design lab files

PROJECT_ROOT="$1"
DESIGN_LAB_PATH="${PROJECT_ROOT}/src/design-lab"

# Check if design lab directory exists
if [ -d "$DESIGN_LAB_PATH" ]; then
    echo "⚠️  WARNING: Design lab files detected at ${DESIGN_LAB_PATH}"
    echo "These temporary files should be cleaned up before committing."
    echo "Run /design-and-refine:cleanup to remove them."
    exit 1
else
    # No cleanup needed
    exit 0
fi
