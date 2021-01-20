export function firstUpperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function removeSymbol(word) {
  return word.replace(/[^a-zA-Z ]/g, " ");
}

export function extractNumber(number) {
  if (number < 10) return `00${number}`
  else if (number < 100 && number > 10) return `0${number}`
  else if (number > 100) return number
}