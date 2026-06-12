# DOAR INSTITUTIONAL SYSTEM DESIGN

## Foundation + Design DNA

**Version:** 1.0
**Framework Target:** React 19 + TailwindCSS
**Purpose:** Institutional Website Design Rules
**Design Authority:** DOAR Design Language

---

# 1. PURPOSE

This document defines the **institutional visual system**, **frontend architecture rules**, and **UI consistency principles** for all DOAR institutional pages.

Its objective is to ensure every interface:

* Maintains visual consistency
* Preserves institutional credibility
* Communicates operational resilience
* Reflects financial orchestration
* Avoids generic fintech aesthetics

This document serves as the **single source of truth** for:

* React 19 implementation
* TailwindCSS styling
* Component design
* Layout composition
* Institutional visual hierarchy
* OpenCode / Cursor / AI generation rules

All generated screens MUST follow these standards.

---

# 2. DESIGN DNA

DOAR must visually communicate three immutable principles.

Every page, component, section, and interaction MUST reinforce at least one of these attributes.

---

## 2.1 UNIFIED

### Definition

DOAR integrates multiple specialized financial infrastructures into a single orchestrated operational layer.

The interface MUST visually communicate:

```txt
One system
Multiple capabilities
Central orchestration
```

### Visual Translation

ALWAYS use:

* Connected systems
* Architecture diagrams
* Unified layouts
* Shared visual language
* Centralized composition

Preferred patterns:

```txt
Hub-and-spoke
Layered infrastructure
Connected cards
Operational ecosystems
```

### Forbidden Patterns

NEVER use:

* Isolated blocks
* Fragmented interfaces
* Random component positioning
* Disconnected visual narratives

Wrong feeling:

```txt
Many separate tools
```

Correct feeling:

```txt
One orchestrated platform
```

---

## 2.2 TRANSPARENT

### Definition

DOAR provides operational visibility, traceability, and controllable financial infrastructure.

The interface MUST feel:

```txt
Visible
Auditable
Controlled
Explainable
```

### Visual Translation

ALWAYS use:

* Explicit diagrams
* Visible connectors
* Clear hierarchies
* Organized spacing
* Structured sections

Visual characteristics:

```txt
Clarity over decoration
```

### Forbidden Patterns

NEVER use:

* Abstract chaos
* Overlapping components
* Decorative overload
* Meaningless motion
* Unclear information hierarchy

Wrong feeling:

```txt
Mystery
Opacity
Confusion
```

Correct feeling:

```txt
Institutional visibility
```

---

## 2.3 RESILIENT

### Definition

DOAR must feel operationally stable and continuously monitored.

The interface MUST communicate:

```txt
Reliability
Stability
Security
Confidence
```

### Visual Translation

ALWAYS use:

* Robust containers
* Precise spacing
* Balanced grids
* Calm motion
* Consistent rhythm

The visual language MUST feel:

```txt
Enterprise-grade
```

### Forbidden Patterns

NEVER use:

* Aggressive animations
* Gaming aesthetics
* Playful interactions
* Excessive visual noise
* Oversaturated gradients

Wrong feeling:

```txt
Startup app
```

Correct feeling:

```txt
Institutional financial infrastructure
```

---

# 3. CORE VISUAL PHILOSOPHY

The DOAR institutional website is NOT:

❌ A neobank

❌ A crypto landing page

❌ A trading platform

❌ A SaaS dashboard

❌ A marketing-heavy fintech website

The DOAR institutional website IS:

```txt
Financial Infrastructure Layer
Enterprise Orchestration Platform
Institutional Technology System
```

### Design Tone

The interface MUST feel:

```txt
Institutional
Executive
Strategic
Precise
Minimal
Technical
Premium
```

### Emotional Outcome

Users should feel:

```txt
Confidence
Transparency
Stability
Professionalism
```

---

# 4. TECHNOLOGY RULES

## 4.1 REQUIRED STACK

All institutional views MUST use:

```txt
React 19
TailwindCSS
TypeScript
Lucide Icons
Framer Motion (limited)
```

### Optional

```txt
class-variance-authority
clsx
tailwind-merge
```

---

## 4.2 REACT RULES

### Component Standard

ALWAYS use:

```tsx
Functional Components
```

NEVER use:

```tsx
Class Components
```

### Required Principles

All UI MUST follow:

```txt
Composition over inheritance
Reusable architecture
Atomic thinking
Separation of concerns
```

### Component Constraints

Components MUST:

* Be reusable
* Be composable
* Be predictable
* Have clear responsibilities

NEVER create:

```txt
God Components
```

Bad:

```txt
One component handling everything
```

Good:

```txt
Hero
 → HeroContent
 → HeroDiagram
 → HeroActions
```

---

## 4.3 FILE STRUCTURE

Institutional UI MUST follow:

```txt
src/
│
├── components/
│   ├── institutional/
│   │   ├── hero/
│   │   ├── sections/
│   │   ├── cards/
│   │   ├── diagrams/
│   │   ├── typography/
│   │   ├── navigation/
│   │   ├── footer/
│   │   └── motion/
│
├── features/
│   ├── infrastructure/
│   ├── compliance/
│   ├── treasury/
│   ├── transparency/
│   └── regulatory/
│
├── constants/
│
├── lib/
│
└── styles/
```

---

## 4.4 NAMING CONVENTIONS

Components MUST use:

```txt
PascalCase
```

Example:

```tsx
InstitutionalHero.tsx
ExecutiveCard.tsx
DiagramNode.tsx
PartnerStrip.tsx
```

Hooks:

```txt
camelCase
```

Example:

```tsx
useScrollGlow()
useHeroAnimation()
```

---

# 5. TAILWINDCSS RULES

## 5.1 STYLING APPROACH

The project MUST follow:

```txt
Utility-first styling
```

ALWAYS use:

```tsx
Tailwind utility classes
```

NEVER use:

```tsx
Inline styles
```

Forbidden:

```tsx
style={{ color: "#F5C400" }}
```

Correct:

```tsx
text-doar-gold
```

---

## 5.2 CLASS ORGANIZATION

Tailwind order MUST follow:

```txt
Layout
Spacing
Sizing
Typography
Colors
Borders
Effects
Transitions
```

Example:

```tsx
className="
flex items-center
gap-4
px-6 py-4
text-lg font-medium
text-white
border border-white/10
rounded-2xl
backdrop-blur-xl
transition-all
duration-200
"
```

---

## 5.3 DESIGN CONSISTENCY

DO NOT invent arbitrary spacing.

ALWAYS use:

```txt
Design Tokens
```

Forbidden:

```tsx
mt-[37px]
w-[723px]
```

Allowed:

```tsx
mt-8
w-full
max-w-7xl
```

---

# 6. DESIGN TOKENS

## 6.1 COLOR SYSTEM

### Primary Brand Color

#### DOAR Gold

```css
#F5C400
```

Tailwind token:

```ts
doar-gold
```

Usage:

* Active states
* Highlights
* Primary icons
* Key words
* Strategic emphasis
* Connection lines

---

### Secondary Brand Color

#### DOAR Blue

```css
#2F6BFF
```

Tailwind token:

```ts
doar-blue
```

Usage:

* Secondary diagrams
* Informational states
* Connectors
* System visualization

---

### Primary Background

#### Midnight Navy

```css
#081120
```

Tailwind token:

```ts
midnight-navy
```

Usage:

```txt
Default page background
```

---

### Secondary Background

#### Deep Space

```css
#050B16
```

Tailwind token:

```ts
deep-space
```

Usage:

```txt
Containers
Gradients
Secondary sections
```

---

### Typography Main

#### White

```css
#FFFFFF
```

Tailwind token:

```ts
text-primary
```

Usage:

```txt
Titles
Important content
```

---

### Typography Secondary

#### Soft Gray

```css
#B8C1D1
```

Tailwind token:

```ts
soft-gray
```

Usage:

```txt
Descriptions
Captions
Secondary labels
```

---

## 6.2 COLOR RULES

DO NOT exceed:

```txt
1 Primary Accent
1 Secondary Accent
Dark foundation
```

Rule:

```txt
80% dark
15% neutral
5% accent
```

NEVER:

❌ Rainbow UI

❌ Neon fintech gradients

❌ Multi-color components

---

## 6.3 BORDER SYSTEM

Standard Border:

```css
border-white/10
```

Strategic Border:

```css
border-doar-gold/40
```

Blue System Border:

```css
border-doar-blue/30
```

---

## 6.4 BORDER RADIUS

Small:

```txt
rounded-xl
12px
```

Standard:

```txt
rounded-2xl
20px
```

Large:

```txt
rounded-[32px]
```

DO NOT mix random radius sizes.

---

## 6.5 SHADOWS

Standard:

```css
shadow-[0_0_30px_rgba(255,255,255,0.04)]
```

Gold Glow:

```css
shadow-[0_0_60px_rgba(245,196,0,0.15)]
```

Blue Glow:

```css
shadow-[0_0_60px_rgba(47,107,255,0.12)]
```

Glow MUST remain subtle.

NEVER create:

```txt
Aggressive neon UI
```

---

# 7. TYPOGRAPHY SYSTEM

## 7.1 PRIMARY FONT

Required:

```txt
Inter
```

Allowed weights:

```txt
300
400
500
600
700
```

NEVER use:

❌ Decorative fonts

❌ Serif fonts

❌ Display fonts

---

## 7.2 TYPOGRAPHY SCALE

### H1

```css
72px
font-bold
tracking-[-0.04em]
leading-[1.05]
```

Tailwind:

```tsx
text-7xl font-bold
```

Usage:

```txt
Hero headlines
```

---

### H2

```css
48px
font-bold
```

Tailwind:

```tsx
text-5xl font-bold
```

---

### H3

```css
32px
font-semibold
```

Tailwind:

```tsx
text-3xl font-semibold
```

---

### Body Large

```css
24px
font-normal
```

Tailwind:

```tsx
text-2xl
```

---

### Body

```css
18px
font-normal
```

Tailwind:

```tsx
text-lg
```

---

### Caption

```css
14px
font-normal
```

Tailwind:

```tsx
text-sm
```

---

# 8. TYPOGRAPHY RULES

### Headlines

MUST:

* Be bold
* Be short
* Use visual line breaks
* Highlight strategic keywords

Example:

```txt
Financial infrastructure
for interoperable
digital operations
```

NOT:

```txt
One extremely long sentence
```

---

### Strategic Highlights

Highlighted words MUST use:

```tsx
text-doar-gold
```

Only for:

* Key concepts
* Strategic terms
* High-value keywords

Do NOT over-highlight.

Maximum:

```txt
20% highlighted text
```

---

# 9. SPACING SYSTEM

Use an 8px spacing system.

Allowed rhythm:

```txt
4
8
12
16
24
32
40
48
64
80
96
120
```

DO NOT use random spacing.

---

# 10. GRID SYSTEM

Institutional layout MUST use:

```txt
12-column grid
```

Desktop container:

```txt
max-width: 1440px
```

Horizontal padding:

```txt
80px
```

Tablet:

```txt
48px
```

Mobile:

```txt
24px
```

---

# 11. GOLDEN RULE

Before approving ANY screen ask:

```txt
Does it feel institutional?

Does it communicate orchestration?

Does it feel transparent?

Does it feel resilient?

Does it match the hero visual language?

Does it avoid generic fintech aesthetics?
```

If any answer is:

```txt
NO
```

The screen MUST be redesigned.
