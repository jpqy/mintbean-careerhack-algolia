export function removeScheme(url) {
  try {
    new URL(url);
  } catch (e) {
    return url;
  }
  return url.split(":")[1];
}
