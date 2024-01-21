export function calculateDiscountPercentage(level: string): number {
  let defaultPercentage = 0
  let discountPercentage = defaultPercentage

  const discountByLevel = {
    standard: 5,
    silver: 10,
    gold: 20,
  }

  if (discountByLevel.hasOwnProperty(level)) {
    discountPercentage = discountByLevel[level as keyof typeof discountByLevel]
    return discountPercentage
  } else {
    throw new Error('Invalid discount level, discount level not defined')
  }
}
