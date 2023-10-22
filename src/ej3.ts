// Ej3. Expresión regular para eliminar determinados patrones de una cadena.

export function removePatterns(text: string, patterns: string[]): string {
  const regex = new RegExp(patterns.join('|'), 'g')
  return text.replaceAll(regex, '').replaceAll('  ', ' ')
}
