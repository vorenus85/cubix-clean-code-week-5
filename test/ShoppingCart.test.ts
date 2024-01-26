import { CartItem, ICartItem, ShoppingCart } from '../src/ShoppingCart'

describe('ShoppingCart tests', () => {
  let shoppingCart: ShoppingCart

  beforeEach(() => {
    shoppingCart = new ShoppingCart([])
  })

  it('should init empty shopping cart', () => {
    expect(shoppingCart.calculateTotal()).toBe(0)
  })

  it('should add new item to shopping cart', () => {
    const cartItem1 = new CartItem('my product', 500)
    const spy = jest.spyOn(shoppingCart, 'addItem')

    shoppingCart.addItem(cartItem1)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(cartItem1)
  })

  it('should calculate cart total', () => {
    const cartItem1 = new CartItem('my product', 500)
    const cartItem2 = new CartItem('another product', 1000)

    shoppingCart.addItem(cartItem1)
    shoppingCart.addItem(cartItem2)

    expect(shoppingCart.calculateTotal()).toBe(1500)
  })
})

describe('Cart item tests', () => {
  let cartItem: ICartItem

  it('should create new cartItem', () => {
    cartItem = new CartItem('my product', 500)

    expect(cartItem.product).toBe('my product')
    expect(cartItem.price).toBe(500)
  })
})
