export const formatPrice = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Aceita 700, "700" ou "700px"
export const toCss = (value) =>
  typeof value === 'number' || /^\d+$/.test(value) ? `${value}px` : value
