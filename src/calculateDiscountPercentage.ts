function calculateDiscountPercentage(level: string): number {
  let discountPercentage: number
  switch (level) {
    case 'standard':
      discountPercentage = 5
      break
    case 'silver':
      discountPercentage = 10
      break
    case 'gold':
      discountPercentage = 15
      break
    default:
      discountPercentage = 0
      break
  }
  if (level === 'gold') {
    // Additional discount for gold members
    discountPercentage += 5
  }
  return discountPercentage
}
