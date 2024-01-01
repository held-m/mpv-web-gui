export function ReplaceDotWithComma(str: string) {
  const num = str.replace(/[^0-9.,]+/, "");
  return num.replace(/\,/g, ".");
}
