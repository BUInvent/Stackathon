const ADD_ORDERED_ITEM = 'ADD_ITEM'

const defaultProduct = {
  title: 'title',
  price: 5.0,
  description: 'Placeholder Product',
  imgURL: '/default-image.jpg',
  dateOrdered: new Date(2019, 0, 3),
  dateDelivered: new Date(2019, 0, 25)
}

const defaultOrderedItems = []
for (let i = 0; i < 5; i++) {
  defaultOrderedItems.push(defaultProduct)
}

export default function(state = {orderedItems: defaultOrderedItems}, action) {
  switch (action.type) {
    case ADD_ORDERED_ITEM:
      return {
        ...state,
        orderedItems: [
          ...state.orderedItems,
          {...action.item, quantity: action.quantity}
        ]
      }
    default:
      return state
  }
}
