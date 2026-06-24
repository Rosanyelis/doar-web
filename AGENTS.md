# DOAR Web — Agent Instructions

## Project Overview

DOAR is an institutional website built with:

* React 19
* TypeScript
* Vite
* TailwindCSS v4
* React Router
* React Helmet Async

Primary goals:

1. Institutional credibility
2. SEO visibility
3. Accessibility compliance
4. Performance optimization
5. Lead generation and conversion

---

# Development Commands

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| npm run dev     | Start development server                 |
| npm run build   | TypeScript validation + production build |
| npm run lint    | ESLint validation                        |
| npm run preview | Preview production build                 |

Before considering a task complete:

```bash
npm run lint
npm run build
```

No task is complete if linting or build fails.

---

# Routing

Active routing lives in:

src/App.tsx

Current routes:

* /
* /seguridad
* /afiliados
* /soporte
* /terminos
* /privacidad
* /doar
* /doar/modelo-operativo
* /doar/cumplimiento

Do NOT use:

src/router/index.tsx

It is deprecated and unused.

---

# Architecture

src/
├── assets/
├── components/
│   ├── web/
│   ├── institutional/
│   ├── fintech/
│   └── layout/
├── pages/
├── styles/
├── lib/
├── hooks/
├── types/
└── main.tsx

Rules:

* One responsibility per component.
* Extract reusable UI.
* Avoid duplicated logic.
* Prefer composition over inheritance.
* Keep components small and maintainable.
* Separate presentation from business logic.

---

# React Best Practices

Mandatory:

* Functional components only.
* Strict TypeScript.
* Avoid any.
* Prefer interfaces over type aliases for props.
* Use custom hooks for reusable logic.
* Memoize expensive calculations.
* Lazy-load pages when appropriate.
* Avoid unnecessary re-renders.

Forbidden:

* Business logic inside JSX.
* Large monolithic components.
* Deep prop drilling.
* Inline anonymous functions when avoidable.

---

# Styling

TailwindCSS v4 only.

Configuration:

src/styles/globals.css

Do NOT use:

tailwind.config.js

Use:

* Utility-first approach
* @apply for reusable patterns
* cn() helper for conditional classes

Keep spacing, typography and layout consistent.

---

# Design System

Source of truth:

docs/design/SYSTEM_DESIGN.md

Always consult before:

* Creating components
* Modifying layouts
* Creating new sections
* Updating branding

No visual decision should contradict the design system.

---

# SEO Requirements

Every page MUST include Helmet.

Required:

* title
* meta description
* canonical
* Open Graph tags
* Twitter Card tags

Example:

<Helmet>
<title>Page Title</title>
<meta name="description" content="..." />
<link rel="canonical" href="..." />
</Helmet>

---

# Content SEO Rules

Every page must:

* Have a single H1
* Use semantic H2-H6 hierarchy
* Include keyword relevance
* Avoid duplicate titles
* Avoid duplicate descriptions

Content must be:

* Human readable
* Scannable
* Accessible
* Structured

---

# Structured Data

Whenever applicable:

* Organization Schema
* WebSite Schema
* Breadcrumb Schema
* FAQ Schema
* Article Schema

Use JSON-LD.

---

# Performance Requirements

Target Core Web Vitals:

LCP < 2.5s
CLS < 0.1
INP < 200ms

Always:

* Optimize images
* Lazy-load media
* Avoid oversized bundles
* Remove dead code
* Minimize hydration cost

---

# Accessibility Requirements

WCAG 2.2 AA minimum.

Required:

* Semantic HTML
* Accessible forms
* Visible focus states
* Keyboard navigation
* Descriptive alt text
* Correct heading hierarchy

Never sacrifice accessibility for aesthetics.

---

# Images

Source:

src/lib/images.ts

Public path:

/assets/*

Rules:

* Always provide alt text.
* Use responsive sizing.
* Avoid oversized assets.
* Prefer modern formats when available.

---

# Institutional UX Rules

Every page should answer:

1. Who is DOAR?
2. What problem does it solve?
3. Why trust DOAR?
4. What action should the visitor take?

Every section must have a clear purpose.

Avoid decorative content without business value.

---

# Conversion Optimization

Each page should contain:

* Clear CTA
* Logical information flow
* Trust indicators
* Low friction navigation

Prioritize clarity over visual complexity.

---

# Quality Checklist

Before finishing ANY task verify:

□ Build succeeds
□ Lint succeeds
□ Mobile responsive
□ Tablet responsive
□ Desktop responsive
□ SEO metadata present
□ Accessibility validated
□ No TypeScript errors
□ No console errors
□ Design system respected
□ Core Web Vitals considered

---

# Available Specialists

@react-architect

Responsibilities:

* Architecture
* Scalability
* Refactoring

@react-developer

Responsibilities:

* Components
* Hooks
* Features

@seo-specialist

Responsibilities:

* Metadata
* Structured data
* Technical SEO

@ui-designer

Responsibilities:

* UX
* Accessibility
* Visual hierarchy

@code-reviewer

Responsibilities:

* Code quality
* Performance
* Maintainability

@qa-tester

Responsibilities:

* Functional testing
* Responsive testing
* Validation

---

# Mandatory Workflow

For major features:

1. Architect designs solution.
2. UI Designer validates UX.
3. Developer implements.
4. SEO Specialist validates discoverability.
5. Code Reviewer audits quality.
6. QA Tester validates functionality.

No feature is considered complete until all validations pass.
