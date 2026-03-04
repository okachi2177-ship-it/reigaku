# CLAUDE.md — Project Instructions

## Environment

- **Platform:** Windows 11 (Git Bash shell unavailable — no POSIX shell)
- **Bash commands will fail.** Do not use `Bash` tool for any commands.

## Verification Workflow

**Do NOT use `preview_screenshot` for verifying code changes.** It hangs in this environment.

Use these instead:
1. `preview_start("reigaku-dev")` to start the dev server (port 3001)
2. `preview_snapshot` — verify structure and text content
3. `preview_inspect` — verify CSS values and styles
4. `preview_console_logs` / `preview_logs` — check for errors
5. `preview_click` / `preview_fill` — test interactions

Only use `preview_screenshot` at the very end if the user explicitly asks for a visual screenshot. Even then, be prepared for it to be slow.

## Dev Server

- Name: `reigaku-dev` (port 3001)
- Always call `preview_start("reigaku-dev")` before any preview tools.
- Do not use `Bash` to start servers.

## File Operations

- Use `Read`, `Edit`, `Write`, `Glob`, `Grep` tools — never Bash file commands.
- Working directory: `C:\Users\respi\Desktop\reigaku`

## Tech Stack

- Next.js (App Router), TypeScript, Tailwind CSS
- Deployed on Vercel
