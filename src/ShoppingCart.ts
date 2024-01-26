export class ShoppingCart {
  constructor(private items: ICartItem[] = []) {}

  addItem(cartItem: ICartItem) {
    this.items.push(cartItem)
  }

  calculateTotal(): number {
    let total = 0
    for (const item of this.items) {
      total += item.price
    }
    return total
  }
}

export class CartItem implements ICartItem {
  public product: string
  public price: number
  constructor(product: string, price: number) {
    this.product = product
    this.price = price
  }
}

export interface ICartItem {
  product: string
  price: number
}
