const ABSOLUTE_URL_PATTERN = /^[a-zA-Z][a-zA-Z\d+\-.]*:/

export function resolveAssetPath(path: string): string {
  if (!path || ABSOLUTE_URL_PATTERN.test(path)) {
    return path
  }

  if (!path.startsWith('/')) {
    return path
  }

  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  return `${normalizedBase}${path}`
}
