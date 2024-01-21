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
      'at $discountLevel discount level should throw error because discount level not exist',
      ({ discountLevel }) => {
        // Act
        const errorMessage =
          'Invalid discount level, discount level not defined'
        const errorExpected = new Error(errorMessage)

        // Assert
        // Act and Assert
        expect(() => calculateDiscountPercentage(discountLevel)).toThrow(
          errorExpected
        )
      }
    )
  })
})
