// Eliminar espacios al inicio y al final, y reemplazar espacios internos por guiones
export function formatUrlToString(input: string): string {
  return input.trim().replace(/\s+/g, "-");
}
