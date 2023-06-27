export function hyphenateString(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-');
}