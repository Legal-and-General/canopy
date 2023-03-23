export default function isExternalURL(url): boolean {
  try {
    return new URL(url).origin !== location.origin;
  } catch {
    return false;
  }
}
