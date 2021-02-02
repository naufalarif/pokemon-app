export function extractTypes(types) {
  // if (types === "normal") { return "bg-yellow-800 text-gray-50" }
  // else if (types === "fighting") { return "bg-red-400 text-gray-50" }
  // else if (types === "flying") { return "bg-blue-300 text-gray-50" }
  // else if (types === "poison") { return "bg-purple-600 text-gray-50" }
  // else if (types === "ground") { return "bg-yellow-600 text-gray-50" }
  // else if (types === "rock") { return "bg-yellow-900 text-gray-50" }
  // else if (types === "bug") { return "bg-green-300 text-gray-50" }
  // else if (types === "ghost") { return "bg-blue-800 text-gray-50" }
  // else if (types === "steel") { return "bg-gray-600 text-gray-50" }
  // else if (types === "fire") { return "bg-red-600 text-gray-50" }
  // else if (types === "water") { return "bg-blue-500 text-gray-50" }
  // else if (types === "grass") { return "bg-green-500 text-gray-50" }
  // else if (types === "electric") { return "bg-yellow-300 text-gray-50" }
  // else if (types === "psychic") { return "bg-pink-400 text-gray-50" }
  // else if (types === "ice") { return "bg-blue-400 text-gray-50" }
  // else if (types === "dragon") { return "bg-purple-900 text-gray-50" }
  // else if (types === "dark") { return "bg-gray-800 text-gray-50" }
  // else if (types === "fairy") { return "bg-pink-500 text-gray-50" }
  if (types === "normal") { return "bg-normal text-gray-50" }
  else if (types === "fighting") { return "bg-fighting text-gray-50" }
  else if (types === "flying") { return "bg-flying text-gray-50" }
  else if (types === "poison") { return "bg-poison text-gray-50" }
  else if (types === "ground") { return "bg-ground text-gray-50" }
  else if (types === "rock") { return "bg-rock text-gray-50" }
  else if (types === "bug") { return "bg-bug text-gray-50" }
  else if (types === "ghost") { return "bg-ghost text-gray-50" }
  else if (types === "steel") { return "bg-steel text-gray-50" }
  else if (types === "fire") { return "bg-fire text-gray-50" }
  else if (types === "water") { return "bg-water text-gray-50" }
  else if (types === "grass") { return "bg-grass text-gray-50" }
  else if (types === "electric") { return "bg-electric text-gray-50" }
  else if (types === "psychic") { return "bg-psychic text-gray-50" }
  else if (types === "ice") { return "bg-ice text-gray-50" }
  else if (types === "dragon") { return "bg-dragon text-gray-50" }
  else if (types === "dark") { return "bg-dark text-gray-50" }
  else if (types === "fairy") { return "bg-fairy text-gray-50" }
}

export function extractStats(types) {
  if (types === "attack") { return "red" }
  else if (types === "defense") { return "blue" }
  else if (types === "hp") { return "green" }
  else if (types === "special-attack") { return "pink" }
  else if (types === "special-defense") { return "purple" }
  else if (types === "speed") { return "green" }
}
