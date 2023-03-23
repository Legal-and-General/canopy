export default function isExternalURL(url: string): boolean {
  try {
    return new URL(url).origin !== location.origin;
  } catch {
    return false;
  }
}
