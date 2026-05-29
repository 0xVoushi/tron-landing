export type PostHogClient = typeof import('posthog-js').default

let posthogPromise: Promise<PostHogClient> | null = null

export function loadPostHog(): Promise<PostHogClient> {
  posthogPromise ??= import('posthog-js').then((module) => module.default)
  return posthogPromise
}
