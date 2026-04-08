# SEO Content Plan: Homepage

Generated: 2026-03-31
Studio: CHTZ-Tech
Target: Full Homepage (all sections)
Primary Keywords: custom software development studio, software development company
Secondary Keywords: AI development services, Web3 development, fullstack development agency, Next.js development, enterprise software development

## Metadata Object (Next.js App Router)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software Development Studio — Web, AI & Web3 | CHTZ-Tech',
  description: 'Senior engineers building production-grade web apps, AI integrations, and Web3 infrastructure. Type-safe code, proven process. Start your project today.',
  keywords: [
    'custom software development',
    'software development studio',
    'AI development services',
    'Web3 development company',
    'fullstack development agency',
    'Next.js development',
    'enterprise software development',
  ],
  openGraph: {
    title: 'CHTZ-Tech — Custom Software Development Studio',
    description: 'Senior engineers building production-grade web, AI, and Web3 applications for startups and enterprises.',
    type: 'website',
    url: 'https://chtz-tech.dev',
    siteName: 'CHTZ-Tech',
    locale: 'en_US',
    images: [{
      url: 'https://chtz-tech.dev/og/homepage.png',
      width: 1200,
      height: 630,
      alt: 'CHTZ-Tech — Custom Software Development Studio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHTZ-Tech — Custom Software Development Studio',
    description: 'Senior engineers building production-grade web, AI, and Web3 applications.',
  },
  alternates: {
    canonical: 'https://chtz-tech.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

## Structured Data (JSON-LD)

```typescript
// components/structured-data/HomepageSchema.tsx
export function HomepageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://chtz-tech.dev/#organization',
        name: 'CHTZ-Tech',
        url: 'https://chtz-tech.dev',
        logo: 'https://chtz-tech.dev/logo.svg',
        image: 'https://chtz-tech.dev/og/homepage.png',
        description: 'Custom software development studio specializing in web applications, AI integration, and Web3 infrastructure.',
        email: 'hello@chtz-tech.dev',
        sameAs: [
          'https://github.com/chtz-tech',
          'https://linkedin.com/company/chtz-tech',
        ],
        knowsAbout: [
          'Custom Software Development',
          'Web Application Development',
          'AI Integration',
          'Web3 Development',
          'Blockchain Development',
          'Next.js',
          'React',
          'TypeScript',
          'Solidity',
          'Node.js',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Application Development',
                description: 'Production-grade web applications built with Next.js, React, and TypeScript.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Development & Integration',
                description: 'LLM-powered features, AI automation, and machine learning integration for existing products.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web3 & Blockchain Development',
                description: 'Smart contracts, DeFi protocols, and decentralized application development.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Fullstack Product Development',
                description: 'End-to-end product development from architecture to deployment for startups and enterprises.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Enterprise Software Solutions',
                description: 'Custom enterprise platforms, admin dashboards, and internal tools.',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://chtz-tech.dev/#webpage',
        url: 'https://chtz-tech.dev',
        name: 'CHTZ-Tech — Custom Software Development Studio',
        description: 'Senior engineers building production-grade web apps, AI integrations, and Web3 infrastructure.',
        isPartOf: { '@id': 'https://chtz-tech.dev/#website' },
        inLanguage: 'en',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://chtz-tech.dev/#website',
        url: 'https://chtz-tech.dev',
        name: 'CHTZ-Tech',
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does custom software development cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Project costs depend on scope, complexity, and timeline. A typical MVP starts at $20K-40K. Enterprise projects range from $50K-200K+. We provide detailed estimates after a free discovery call where we assess your requirements.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does MVP development take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A focused MVP typically takes 4-8 weeks from kickoff to production. Complex products with AI or Web3 components may take 8-12 weeks. We prioritize shipping fast without cutting corners on code quality.',
            },
          },
          {
            '@type': 'Question',
            name: 'What technologies do you use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our core stack includes Next.js, React, TypeScript, Node.js, and PostgreSQL for web applications. For AI projects we use Python, LangChain, and OpenAI/Anthropic APIs. For Web3 we work with Solidity, Hardhat, and Wagmi.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you work with startups or enterprises?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both. We help startups build MVPs and scale their products, and we help enterprises build custom internal tools, AI integrations, and blockchain infrastructure. Our team adapts to your pace and process.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I choose a software development partner?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Look for a team with relevant technical expertise, a clear process, and a portfolio of shipped products. Ask about their engineering standards, testing practices, and how they handle communication. We recommend starting with a small engagement to evaluate fit.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is your development process?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We follow a structured process: Discovery (1 week), Architecture & Planning (1 week), Development in 2-week sprints with continuous delivery, and Launch with monitoring. Every project includes CI/CD, automated testing, and performance budgets from day one.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://chtz-tech.dev',
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Content Map (Section-by-Section)

### Section 1: Hero
- **Component**: `HeroSection`
- **H1**: `Custom Software Development Studio — Web, AI & Web3`
- **Subhead**: `Senior engineers building production-grade applications for startups and enterprises. From architecture to deployment — we own the outcome.`
- **CTA Primary**: `Start Your Project` → #contact
- **CTA Secondary**: `See Our Work` → #work
- **Trust line**: `40+ products shipped · Senior engineers only · 95+ Lighthouse scores`
- **Target Keywords**: custom software development studio, web AI Web3

### Section 2: Why Teams Choose Us
- **Component**: `WhyUsSection`
- **H2**: `Why Teams Choose Us`
- **Cards (3)**:
  - **H3**: `Senior Engineers Only` — "No juniors learning on your project. Every team member has 8+ years of production experience across multiple domains."
  - **H3**: `Full Lifecycle Ownership` — "From architecture to deployment to monitoring. We don't hand off half-finished work — we own the outcome end to end."
  - **H3**: `Performance-First Development` — "Every project ships with 95+ Lighthouse scores, type-safe code, automated testing, and CI/CD from day one."
- **Target Keywords**: senior engineers, full lifecycle, performance-first development

### Section 3: Our Software Development Services
- **Component**: `ServicesSection`
- **H2**: `Our Software Development Services`
- **Cards (5)**:
  - **H3**: `Web Application Development` — "Production-grade web applications built with Next.js, React, and TypeScript. From marketing sites to complex SaaS platforms."
  - **H3**: `AI Development & Integration` — "LLM-powered features, AI automation, and machine learning integration. We bring AI into existing products or build AI-native applications."
  - **H3**: `Web3 & Blockchain Development` — "Smart contracts, DeFi protocols, token infrastructure, and decentralized applications. Solidity, Hardhat, and modern Web3 tooling."
  - **H3**: `Fullstack Product Development` — "End-to-end product builds from idea to production. Architecture, frontend, backend, infrastructure — shipped in weeks, not months."
  - **H3**: `Enterprise Software Solutions` — "Custom admin dashboards, internal tools, and enterprise platforms. Built for scale, security, and long-term maintainability."
- **Target Keywords**: web application development, AI development, Web3 blockchain development, fullstack product, enterprise software

### Section 4: Our Development Process
- **Component**: `ProcessSection`
- **H2**: `Our Development Process`
- **Steps (4)**:
  1. `Discovery` — "We dive into your requirements, define scope, and identify risks. You get a detailed technical plan and timeline."
  2. `Architecture` — "System design, tech stack decisions, database schema, API contracts. Everything documented before the first line of code."
  3. `Development` — "2-week sprints with continuous delivery. You see working software from week one. CI/CD, automated testing, code reviews."
  4. `Launch & Support` — "Production deployment with monitoring, performance audits, and handoff documentation. We stay available for iterations."
- **Target Keywords**: development process

### Section 5: Selected Work
- **Component**: `WorkSection`
- **H2**: `Selected Work`
- **Body**: 2-3 featured case studies with project name, description, tech stack, and key metrics
- **CTA**: `View All Case Studies` → /work
- **Target Keywords**: (via case study descriptions)

### Section 6: What Our Clients Say
- **Component**: `TestimonialsSection`
- **H2**: `What Our Clients Say`
- **Body**: 3 testimonial cards — quote, name, role, company
- **Target Keywords**: (natural via testimonial content)

### Section 7: Frequently Asked Questions
- **Component**: `FAQSection`
- **H2**: `Frequently Asked Questions`
- **Questions (6)**:
  1. "How much does custom software development cost?"
  2. "How long does MVP development take?"
  3. "What technologies do you use?"
  4. "Do you work with startups or enterprises?"
  5. "How do I choose a software development partner?"
  6. "What is your development process?"
- **Schema**: FAQPage JSON-LD (see above)
- **Target Keywords**: all long-tail keywords via questions

### Section 8: Start Your Software Project
- **Component**: `CTASection`
- **H2**: `Start Your Software Project`
- **Body**: `Have an idea or a project that needs senior engineering? Tell us about it. We respond within 24 hours.`
- **Form fields**: Name, Email, Project Description (textarea), Budget range (optional select)
- **Button**: `Send Message`
- **Target Keywords**: software project

## Component Hierarchy

```
app/page.tsx
  <HomepageSchema />
  <HeroSection />
  <WhyUsSection />
  <ServicesSection />
  <ProcessSection />
  <WorkSection />
  <TestimonialsSection />
  <FAQSection />
  <CTASection />
```

## Files to Create

- [ ] `app/page.tsx` — Homepage with metadata export
- [ ] `app/layout.tsx` — Root layout with fonts, global metadata, analytics
- [ ] `app/globals.css` — Tailwind directives
- [ ] `app/sitemap.ts` — Dynamic sitemap
- [ ] `app/robots.ts` — Robots config
- [ ] `components/sections/HeroSection.tsx`
- [ ] `components/sections/WhyUsSection.tsx`
- [ ] `components/sections/ServicesSection.tsx`
- [ ] `components/sections/ProcessSection.tsx`
- [ ] `components/sections/WorkSection.tsx`
- [ ] `components/sections/TestimonialsSection.tsx`
- [ ] `components/sections/FAQSection.tsx`
- [ ] `components/sections/CTASection.tsx`
- [ ] `components/layout/Header.tsx` — Sticky nav with anchor links
- [ ] `components/layout/Footer.tsx`
- [ ] `components/layout/MobileMenu.tsx` — Client component
- [ ] `components/structured-data/HomepageSchema.tsx`
- [ ] `components/ui/Button.tsx` — Primary/secondary variants
- [ ] `components/ui/SectionHeader.tsx` — Reusable H2 + description
- [ ] `components/ui/ServiceCard.tsx`
- [ ] `components/ui/TestimonialCard.tsx`
- [ ] `components/ui/FAQAccordion.tsx` — Client component
- [ ] `components/ui/ContactForm.tsx` — Client component
- [ ] `lib/content/homepage.ts` — All homepage copy as constants
- [ ] `tailwind.config.ts` — Custom tokens (brand colors, fonts)
- [ ] `next.config.ts` — Next.js configuration
- [ ] `public/og/homepage.png` — OpenGraph image (1200x630)

## SEO Checklist

- [ ] H1 contains "Custom Software Development Studio", appears once
- [ ] H2s contain secondary keywords (services, development process, FAQ)
- [ ] Meta title under 60 chars, primary keyword at start
- [ ] Meta description under 160 chars, includes CTA language
- [ ] OG image 1200x630 with studio name and tagline
- [ ] Canonical URL set to https://chtz-tech.dev
- [ ] JSON-LD validates: ProfessionalService, FAQPage, BreadcrumbList, WebPage
- [ ] FAQ questions match real search queries (long-tail keywords)
- [ ] Image alt text includes keywords naturally
- [ ] Keyword density < 2% across full page
- [ ] Content above 1000 words total
- [ ] Internal links to future pages (/work, /about)
- [ ] sitemap.ts lists homepage
- [ ] robots.ts allows crawling

## Core Web Vitals Considerations

- [ ] Hero image (if any): `next/image` with `priority={true}`
- [ ] Fonts: preload via `next/font` (1 variable font family)
- [ ] LCP element: H1 text or hero background — ensure < 2.5s
- [ ] CLS = 0: all elements have fixed dimensions, font-display: swap
- [ ] INP: CTAs immediately interactive, no blocking JS
- [ ] First Load JS target: < 80KB (only MobileMenu, FAQAccordion, ContactForm are client components)
- [ ] All sections are Server Components by default

## Keyword Distribution Map

| Section | Primary KW | Secondary KWs | Long-tail KWs |
|---|---|---|---|
| Hero (H1) | custom software development studio | web, AI, Web3 | — |
| Why Us (H2) | — | senior engineers, performance-first | — |
| Services (H2) | software development services | web app dev, AI dev, Web3, fullstack, enterprise | — |
| Process (H2) | — | development process | — |
| Work (H2) | — | (via case study content) | — |
| Testimonials | — | — | — |
| FAQ (H2) | — | — | cost, MVP timeline, technologies, startups/enterprise, choose partner, process |
| CTA (H2) | software project | — | — |
