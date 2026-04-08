---
name: ux-design
description: Apply UX design principles for creating user-centered landing pages. Use when planning visitor flows, ensuring accessibility (WCAG 2.1 AA), organizing page structure, implementing interaction patterns, or designing contact forms. Complements ui-design (visual principles) and seo-content (content strategy). Trigger keywords: UX, user experience, user flow, accessibility, WCAG, information architecture, interaction design, usability, user research, personas, journey map, navigation, conversion, scroll behavior, mobile UX.
license: MIT
---

# UX Design Skill

## Overview

User experience design principles for the studio landing page. Focuses on the visitor's journey from first impression to conversion (contact form / call booking).

**Tech Context**: Next.js 15, Tailwind CSS, TypeScript, SSG Landing Page
**Project Type**: Marketing landing page — visitors spend 30-90 seconds deciding whether to engage.

## Core UX Principles

### 1. Task-Oriented Design
Every section answers a specific visitor question:
- **Hero**: "What is this? Is it for me?"
- **Social Proof**: "Can I trust them?"
- **Services**: "Can they do what I need?"
- **Process**: "What will working with them be like?"
- **Case Studies**: "Have they done this before?"
- **FAQ**: "What about [concern]?"
- **CTA**: "How do I start?"

### 2. Progressive Disclosure
Reveal information as the visitor scrolls deeper. Never front-load complexity.
- Above the fold: headline, value prop, CTA (the hook)
- First scroll: proof and trust signals
- Mid-page: details, services, methodology
- Bottom: FAQ (objection handling), final CTA

### 3. Cognitive Load Management
- One primary CTA per viewport
- 3-5 service categories visible at once (max)
- FAQ: accordion (one at a time)
- Navigation: 5-7 items max

### 4. Feedback & Responsiveness
- Hover states: 200ms transition on all interactive elements
- Focus states: visible for keyboard navigation
- Contact form: inline validation, clear errors, success confirmation
- Scroll: smooth for anchor links

## Visitor Flow Design

### Primary Flow: Landing → Contact
```
Land (organic search / referral)
  → Scan hero (3 sec — value prop + credibility)
  → Scroll to social proof (trust check)
  → Browse services (capability match)
  → Read process (professionalism check)
  → Check FAQ (objection resolved)
  → Click CTA → Contact form
  → Submit → Success + expected response time
```

### Navigation UX
- **Sticky header**: compact on scroll, `bg-white/80 backdrop-blur`
- **Anchor links**: smooth scroll (`scroll-behavior: smooth`)
- **Mobile menu**: hamburger → overlay, close on Escape/overlay click, focus trap
- **Active section**: highlight current in nav (Intersection Observer)
- **CTA in nav**: always visible, even on mobile

## Accessibility (WCAG 2.1 AA)

### Non-Negotiable
- [ ] Color contrast: 4.5:1 normal text, 3:1 large text
- [ ] Keyboard navigation: all elements reachable via Tab
- [ ] Focus indicators: visible ring on all interactive elements
- [ ] Alt text: every image has descriptive alt
- [ ] Semantic HTML: heading hierarchy, landmarks
- [ ] ARIA labels: on elements without visible text
- [ ] Skip to content: link for keyboard users
- [ ] Form labels: every input has `<label>`
- [ ] Error identification: not just color
- [ ] Reduced motion: respect `prefers-reduced-motion`

## Interaction Patterns

### Contact Form UX
- Labels above inputs (not floating — accessibility)
- Inline validation on blur
- Required fields: asterisk + explanation at top
- Submit: "Send Message" not "Submit"
- Success: replace form with confirmation + response time
- Error: keep data, scroll to first error, focus field

### FAQ Accordion
- One item open at a time
- Keyboard: Enter/Space toggle, Arrow keys navigate
- `aria-expanded` on trigger, `aria-controls` on content
- Smooth height transition

### Mobile Navigation
- Hamburger icon → full-screen overlay
- Close: X button, Escape key, overlay click
- Focus trap while open, body scroll lock

## Information Architecture

### Single-Page Structure
```
/ (homepage)
  ├── #hero
  ├── #services
  ├── #process
  ├── #work
  ├── #testimonials
  ├── #faq
  └── #contact
```

### Nav: `Logo | Services | Process | Work | FAQ | [Contact Us]`

## Mobile-First UX

- Nav collapses at `md:` (768px)
- Cards: single column on mobile
- CTAs: stack vertically (`flex-col sm:flex-row`)
- Touch targets: 44x44px minimum
- No hover-only interactions
- Footer: accordion for link groups

## References

- `references/accessibility.md` — WCAG 2.1 AA detailed guide
- `references/user-flows.md` — Visitor flow diagrams
- `references/interaction-patterns.md` — Component interaction patterns
- `references/information-architecture.md` — Page structure and nav
- `references/figma-integration.md` — Design handoff workflow

## How This Complements Other Skills

- **ui-design**: Visual design principles — ux-design provides experience strategy
- **seo-content**: Content structure aligns with UX flow (persuasion funnel)
- **tailwind-system**: Implements UX patterns with Tailwind utilities
- **design-and-refine**: Considers UX principles when evaluating design variants
