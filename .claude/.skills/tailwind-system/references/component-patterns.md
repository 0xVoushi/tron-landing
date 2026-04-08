# Component Patterns Reference

Landing page component patterns using Tailwind CSS + Next.js.

## Section Components

### Hero Section
```tsx
<section aria-label="Hero" className="relative overflow-hidden bg-white dark:bg-gray-950">
  <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
        {headline}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 sm:text-xl">
        {subheadline}
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <PrimaryCTA />
        <SecondaryCTA />
      </div>
    </div>
  </div>
</section>
```

### Services Grid
```tsx
<section aria-label="Services" className="py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeader title="..." description="..." />
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(service => <ServiceCard key={service.id} {...service} />)}
    </div>
  </div>
</section>
```

### Testimonials
```tsx
<section aria-label="Testimonials" className="bg-gray-50 py-16 dark:bg-gray-900/50 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeader title="..." description="..." />
    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
      {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
    </div>
  </div>
</section>
```

### FAQ Section
```tsx
<section aria-label="FAQ" className="py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <SectionHeader title="Frequently Asked Questions" />
    <dl className="mt-12 space-y-6">
      {faqs.map(faq => (
        <div key={faq.question}>
          <dt className="text-lg font-semibold text-gray-900 dark:text-white">
            {faq.question}
          </dt>
          <dd className="mt-2 text-base text-gray-600 dark:text-gray-400">
            {faq.answer}
          </dd>
        </div>
      ))}
    </dl>
  </div>
</section>
```

### CTA Section (Final)
```tsx
<section aria-label="Get Started" className="bg-brand-500 dark:bg-brand-600">
  <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {headline}
    </h2>
    <p className="mt-4 text-lg text-brand-100">
      {subtext}
    </p>
    <div className="mt-8">
      <a href="#contact" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-600 shadow-sm transition-colors hover:bg-brand-50">
        {ctaText}
      </a>
    </div>
  </div>
</section>
```

## UI Components

### Service Card
```tsx
<div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:p-8">
  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/20">
    {icon}
  </div>
  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{description}</p>
</div>
```

### Testimonial Card
```tsx
<figure className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 sm:p-8">
  <blockquote className="text-base text-gray-600 dark:text-gray-300">
    <p>"{quote}"</p>
  </blockquote>
  <figcaption className="mt-4 flex items-center gap-4">
    <Image src={avatar} alt={name} width={40} height={40} className="rounded-full" />
    <div>
      <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{role}, {company}</div>
    </div>
  </figcaption>
</figure>
```

### Stat Card
```tsx
<div className="text-center">
  <div className="text-4xl font-bold text-brand-500">{value}</div>
  <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{label}</div>
</div>
```

## Navigation

### Desktop Nav
```tsx
<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
    <Logo />
    <div className="hidden items-center gap-8 md:flex">
      {links.map(link => (
        <a key={link.href} href={link.href} className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          {link.label}
        </a>
      ))}
      <PrimaryCTA size="sm" />
    </div>
    <MobileMenuButton className="md:hidden" />
  </nav>
</header>
```

## Footer

```tsx
<footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {/* Column groups */}
    </div>
    <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} [Studio Name]. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```
