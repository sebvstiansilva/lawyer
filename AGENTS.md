# AGENTS.md — GSD Workflow Guidance

## Project Context

**Project:** Abogado Laboral Chileno — Sitio web profesional
**Goal:** Convertir visitantes en clientes mediante diseño elegante y contacto-first

## Workflow Rules

### Before Any Task
1. Read `.planning/PROJECT.md` — understand the "why"
2. Read `.planning/ROADMAP.md` — understand the phase structure
3. Read `.planning/REQUIREMENTS.md` — understand requirements
4. Read `.planning/config.json` — understand workflow preferences

### Phase Execution
1. Read the phase section in ROADMAP.md
2. Break phase into tasks
3. Execute tasks — commit after each logical unit
4. Mark tasks complete in STATE.md
5. When phase complete, verify against success criteria
6. Commit phase completion

### Quality Gates
- Dark theme: #0A0A0A background, #C9A227 accents, #F5F5F5 text
- Typography: Playfair Display (headlines), Inter (body)
- Performance: <3s load, zero unnecessary JS
- Mobile: Hamburger nav, touch targets 44px+
- SEO: Unique meta tags per page, semantic HTML

### Commit Strategy
- Atomic commits: one logical change per commit
- Commit message format: `type: description`
- Types: feat, fix, docs, style, refactor, test, chore

## Key Constraints

- **Stack:** Astro 4.x, Tailwind CSS
- **Language:** 100% Spanish (Chile)
- **Theme:** Dark, sophisticated, serif typography
- **Contact-first:** Teléfono/email siempre visibles
- **No:** Blog, agenda online, chat en vivo (v1)

## Success Definition

Each phase is complete when:
1. All tasks done (check ROADMAP.md)
2. Success criteria met
3. Phase committed

---
*Generated: 2025-01-16*