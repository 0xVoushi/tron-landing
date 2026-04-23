# Persuasion Patterns Reference

Psychological principles for landing page conversion. Absorbs the core of the `marketing-psychology` skill, adapted for a development studio context.

## Core Principles

### 1. Social Proof
**People follow the actions of others, especially similar others.**

Application on landing page:
- **Client logos**: Display recognizable brands or company types
- **Testimonials**: Named quotes with role, company, and photo
- **Metrics**: "40+ products shipped", "12 countries served"
- **Case studies**: Specific results with before/after data
- **GitHub stars/contributions**: Technical social proof for dev audience

**Placement**: Immediately after hero section (answer "Can I trust them?" early).

### 2. Authority
**People trust experts and credible sources.**

Application:
- **Technology expertise signals**: Specific tech stack mentions (Next.js, Solidity, Python)
- **Open source contributions**: GitHub activity, published libraries
- **Thought leadership**: Technical blog posts, conference talks
- **Certifications**: AWS, Google Cloud, relevant blockchain certs
- **Team credentials**: "Ex-[BigTech]", "10+ years in [domain]"

**Placement**: Service descriptions, about section, team bios.

### 3. Specificity
**Specific claims are more believable than vague ones.**

| Vague (weak) | Specific (strong) |
|---|---|
| "Extensive experience" | "40+ products shipped since 2020" |
| "Fast delivery" | "MVP in 4 weeks, production in 8" |
| "Expert team" | "3 senior engineers, avg 10yr experience" |
| "High performance" | "95+ Lighthouse score on every project" |
| "Many technologies" | "Next.js, React, Node, Python, Solidity" |

### 4. Reciprocity
**People feel obligated to return favors.**

Application:
- **Free consultation**: Give value before asking for commitment
- **Free technical assessment**: Audit their current site/product
- **Open source tools**: Give back to the community
- **Valuable content**: Blog posts that genuinely help (not just SEO filler)

**Placement**: CTAs framed as giving ("Get a free assessment") not taking ("Buy our services").

### 5. Scarcity / Urgency (Use Carefully)
**People value things that are limited or time-sensitive.**

Authentic application for a studio:
- **Limited capacity**: "We take on 3-4 projects at a time" (if true)
- **Current availability**: "Currently accepting new projects for Q2" (if true)
- **Team size**: "Small team = personal attention" (genuine scarcity)

**Never fake**: Don't create artificial urgency ("Only 2 spots left!" when untrue). It destroys trust permanently.

### 6. Loss Aversion
**People are more motivated by avoiding losses than gaining benefits.**

Application:
- Frame problems in terms of what they're losing NOW:
  - "Every day without [solution], you're losing [specific thing]"
  - "Your current site's 5-second load time costs you 40% of visitors"
- Show the cost of inaction, not just the benefit of action

**Placement**: Problem/agitate sections, before presenting the solution.

### 7. Anchoring
**The first piece of information influences perception of everything after.**

Application:
- Lead with the strongest metric or most impressive result
- Show the "enterprise" version of your service before the "startup" version
- Present the full scope first, then the focused offering feels like a deal

### 8. Cognitive Ease
**People prefer things that are easy to process.**

Application:
- Short sentences, simple words
- Familiar layout patterns (don't reinvent navigation)
- Clear visual hierarchy (big → medium → small)
- Obvious next steps (one primary CTA per viewport)
- Progress indicators for multi-step processes

## Landing Page Persuasion Flow

```
1. HERO: Identity + Promise
   → Visitor thinks: "This is what I was looking for"
   → Principles: Specificity, Cognitive Ease

2. SOCIAL PROOF: Trust Signals
   → Visitor thinks: "Others trust them"
   → Principles: Social Proof, Authority

3. SERVICES: Capability Proof
   → Visitor thinks: "They can do what I need"
   → Principles: Authority, Specificity

4. PROCESS: Risk Reduction
   → Visitor thinks: "I know what to expect"
   → Principles: Cognitive Ease, Reciprocity

5. CASE STUDIES: Results Proof
   → Visitor thinks: "They've done this before"
   → Principles: Social Proof, Specificity

6. FAQ: Objection Handling
   → Visitor thinks: "My concerns are addressed"
   → Principles: Cognitive Ease, Loss Aversion

7. CTA: Action Trigger
   → Visitor thinks: "I should act now"
   → Principles: Scarcity (if authentic), Reciprocity ("free consultation")
```

## Anti-Patterns (Never Use)

- **Dark patterns**: Fake urgency, misleading claims, hidden costs
- **Manipulative countdown timers**: If the "deal" resets, it's fake
- **Fake reviews/testimonials**: Violates trust and possibly law
- **Bait and switch**: Promising one thing, delivering another
- **Fear-based messaging**: Scaremongering about competitors
- **Excessive popups**: Interrupt the reading flow, hurt UX and SEO
