# Visitor Journey: Landing to Contact

## Journey Map

### Stage 1: Arrival (0-3 seconds)
**Channel**: Google search, referral link, social media, GitHub
**Page Element**: Hero section
**Visitor Thinking**: "Is this what I'm looking for?"
**Key Metrics**: Bounce rate, time on page

**UX Requirements**:
- H1 immediately communicates value proposition
- No interstitials, no popups, no loading screens
- Above-fold content renders in < 1s (LCP target)

### Stage 2: Trust Evaluation (3-15 seconds)
**Page Element**: Social proof section (logos, stats, short testimonials)
**Visitor Thinking**: "Can I trust these people?"
**Key Metrics**: Scroll depth past hero

**UX Requirements**:
- Client logos or trust signals immediately after hero
- Concrete numbers ("40+ products", "3 years") not vague claims
- No scrolljacking or animation that delays content

### Stage 3: Capability Assessment (15-45 seconds)
**Page Element**: Services section, possibly process section
**Visitor Thinking**: "Can they do what I specifically need?"
**Key Metrics**: Scroll depth to services, click on service cards

**UX Requirements**:
- Scannable service cards (icon + title + 1-2 sentences)
- Specific technology mentions for technical audience
- Outcome-focused for business audience
- No "read more" walls — key info visible immediately

### Stage 4: Evidence Gathering (45-90 seconds)
**Page Element**: Case studies, testimonials, process
**Visitor Thinking**: "Prove it. Show me results."
**Key Metrics**: Time on case studies, testimonial engagement

**UX Requirements**:
- Named testimonials with role and company
- Specific results (metrics, before/after)
- Process visualization (numbered steps, timeline)
- Links to detailed case studies (if separate pages)

### Stage 5: Objection Resolution (60-120 seconds)
**Page Element**: FAQ section
**Visitor Thinking**: "But what about [concern]?"
**Key Metrics**: FAQ interaction (which questions opened)

**UX Requirements**:
- Address top 5-8 objections (pricing, timeline, process, guarantee, team)
- Accordion pattern for digestible consumption
- Direct, honest answers (no sales speak)
- Schema markup for FAQ rich results

### Stage 6: Conversion (Action)
**Page Element**: Contact form / CTA section
**Visitor Thinking**: "I'm ready to reach out."
**Key Metrics**: Form submission rate, CTA click rate

**UX Requirements**:
- Minimal form fields (name, email, message — maybe project type dropdown)
- Clear expectation: "We respond within 24 hours"
- No CAPTCHA (use honeypot instead)
- Success confirmation with next steps

## Drop-off Points & Mitigations

| Drop-off | Cause | Mitigation |
|---|---|---|
| Hero bounce | Unclear value prop | Clear H1 + specific subheadline |
| Before services | No trust established | Add logos/stats before services |
| After services | Doesn't see their need | FAQ addresses edge cases |
| At form | Too many fields / unclear next step | Minimal form, clear CTA text |
| After submit | No confirmation | Success message + timeline |
