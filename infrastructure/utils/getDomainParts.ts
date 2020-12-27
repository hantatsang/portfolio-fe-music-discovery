/**
 * Get a domain and return its parts:
 * - subdomain
 * - parent domain name
 * Example: test.domain.com will return `test` and `domain.com`
 * @param domain domain name
 */
export function getDomainParts(
  domain: string
): { subdomain: string; parentDomain: string } {
  const parts = domain.split(".");
  if (parts.length < 2) {
    throw new Error(`No TLD found for ${domain}`);
  }
  // No subdomain, e.g. domain.com.
  if (parts.length === 2) {
    return { subdomain: "", parentDomain: domain };
  }

  const subdomain = parts[0];
  parts.shift(); // Drop first element

  return {
    subdomain,
    // Trailing "." to canonicalize domain.
    parentDomain: parts.join(".") + ".",
  };
}
