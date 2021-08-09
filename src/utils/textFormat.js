export function firstUpperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function removeSymbol(word) {
  return word.replace(/[^a-zA-Z ]/g, " ");
}

export function convertToSlug(word) {
  return word.replace(/\s/g, '-');
}

export function extractNumber(number) {
  if (number < 10) return `00${number}`;
  if (number < 100 && number > 10) return `0${number}`;
  return number;
}

export function dateUtils(date) {
  const now = new Date();
  const datePayload = new Date(date);
  const twoDaysAgo = 86400000 * 2;
  const yesterday = 86400000;

  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0, 0);

  datePayload.setHours(0);
  datePayload.setMinutes(0);
  datePayload.setSeconds(0, 0);

  if (now - datePayload >= twoDaysAgo) { return datePayload.toString().slice(0, 15) }
  else if (now - datePayload == yesterday) { return "Yesterday" }
  else { return "Today" }
}