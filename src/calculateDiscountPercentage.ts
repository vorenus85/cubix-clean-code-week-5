export function calculateDiscountPercentage(level: string): number | undefined {
  let discountPercentage: number | undefined

  const levels = new Map<string, number>([
    ['standard', 5],
    ['silver', 10],
    ['gold', 20],
  ])

  discountPercentage = levels.has(level) ? levels.get(level) : 0
  return discountPercentage
}
