# Accessibility & UX Audit Report (SPRINT D3)

## Overview
Summarizes the accessibility and UX audit performed on the Curriculum-web application.

## Changes Implemented
- **HeroSection**: Added `aria-label` to CTA links.
- **ProjectsSection**: Added descriptive `aria-label` to project links (Repo/Video).
- **VideoEmulatorModal**:
    - Implemented focus trapping (Tab/Shift+Tab).
    - Implemented focus restoration (returning focus to trigger button).
    - Verified ESC key closing.

## Verification
- Status: All systems green.
- Typecheck: Success.
- Lint: Success.
- Build: Success.
- Keyboard Audit: Verified focus trapping and aria-labels.
