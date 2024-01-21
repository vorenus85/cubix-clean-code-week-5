import { calculateDiscountPercentage } from '../src/calculateDiscountPercentage'

describe('calculate discount percentage', () => {
  test.each`
    discountLevel | percentage
    ${'standard'} | ${5}
    ${'silver'}   | ${10}
    ${'gold'}     | ${20}
    ${''}         | ${0}
    ${'custom'}   | ${0}
    ${'asd'}      | ${0}
  `(
    '$discountLevel discount level should give $percentage percent discount',
    ({ discountLevel, percentage }) => {
      // Act
      const actualResult = calculateDiscountPercentage(discountLevel)

      // Assert
      expect(actualResult).toBe(percentage)
    }
  )
})
