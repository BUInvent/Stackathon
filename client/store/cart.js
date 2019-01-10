const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'

const defaultProduct = {
  title: 'title',
  price: 5.0,
  description: 'Placeholder Product',
  imgURL: '/default-image.jpg',
  quantity: 5
}
const defaultCart = []
for (let i = 0; i < 5; i++) {
  defaultCart.push(defaultProduct)
}
const defaultPrice = 0

export const addItem = (item, quantity = 1) => ({
  type: ADD_ITEM,
  item,
  quantity
})

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
})

export const changeQuantity = (item, quantity) => ({
  type: CHANGE_QUANTITY,
  item,
  quantity
})

export default function(
  state = {cart: defaultCart, price: defaultPrice},
  action
) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, {...action.item, quantity: action.quantity}],
        price: state.price + action.item.price * action.quantity
      }
    case REMOVE_ITEM:
      let newCart = state.cart.map(item => {
        if (item.id !== action.item.id) {
          return item
        }
      })
      return {
        ...state,
        cart: newCart
      }
    default:
      return state
  }
}
