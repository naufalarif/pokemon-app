export function extractTypes(types) {
  if (types === "normal") return "bg-normal text-gray-50";
  if (types === "fighting") return "bg-fighting text-gray-50";
  if (types === "flying") return "bg-flying text-gray-50";
  if (types === "poison") return "bg-poison text-gray-50";
  if (types === "ground") return "bg-ground text-gray-50";
  if (types === "rock") return "bg-rock text-gray-50";
  if (types === "bug") return "bg-bug text-gray-50";
  if (types === "ghost") return "bg-ghost text-gray-50";
  if (types === "steel") return "bg-steel text-gray-50";
  if (types === "fire") return "bg-fire text-gray-50";
  if (types === "water") return "bg-water text-gray-50";
  if (types === "grass") return "bg-grass text-gray-50";
  if (types === "electric") return "bg-electric text-gray-50";
  if (types === "psychic") return "bg-psychic text-gray-50";
  if (types === "ice") return "bg-ice text-gray-50";
  if (types === "dragon") return "bg-dragon text-gray-50";
  if (types === "dark") return "bg-dark text-gray-50";
  if (types === "fairy") return "bg-fairy text-gray-50";
  return "bg-normal text-gray-50";
}

export function extractStats(types) {
  if (types === "attack") return "red";
  if (types === "defense") return "blue";
  if (types === "hp") return "green";
  if (types === "special-attack") return "pink";
  if (types === "special-defense") return "purple";
  if (types === "speed") return "green";
  return "red";
}
