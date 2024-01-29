import { calculateDiscountPercentage } from '../src/calculateDiscountPercentage'

describe('calculate discount percentage', () => {
  describe('Happy path', () => {
    test.each`
      discountLevel | percentage
      ${'standard'} | ${5}
      ${'silver'}   | ${10}
      ${'gold'}     | ${20}
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

  describe('Error path', () => {
    test.each`
      discountLevel
      ${'custom'}
      ${'default'}
      ${'asd'}
      ${''}
    `(
      'at $discountLevel discount level should return 0 discount',
      ({ discountLevel }) => {
        // Arrange
        const expectedDiscount = 0

        // Act
        const actualResult = calculateDiscountPercentage(discountLevel)

        // Assert
        expect(actualResult).toBe(expectedDiscount)
      }
    )
  })
})
