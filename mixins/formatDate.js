export const formatDate = function(any) {
  const date = new Date(any)
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
}
