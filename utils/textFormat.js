export function firstUpperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function removeSymbol(word) {
  return word.replace(/[^a-zA-Z ]/g, " ");
}