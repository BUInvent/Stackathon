const ADD_ORDERED_ITEM = 'ADD_ITEM'
const ADD_ADDRESS = 'ADD_ADDRESS'
const REMOVE_ADDRESS = 'REMOVE_ADDRESS'

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

export const removeAddress = address => ({
  type: REMOVE_ADDRESS,
  address
})

export const addAddress = address => ({
  type: ADD_ADDRESS,
  address
})

export default function(
  state = {
    orderedItems: defaultOrderedItems,
    userAddresses: []
  },
  action
) {
  switch (action.type) {
    case ADD_ORDERED_ITEM:
      return {
        ...state,
        orderedItems: [
          ...state.orderedItems,
          {...action.item, quantity: action.quantity}
        ]
      }

    case ADD_ADDRESS:
      return {
        ...state,
        userAddresses: [...state.userAddresses, {...action.address}]
      }

    case REMOVE_ADDRESS:
      return {
        ...state,
        userAddresses: state.userAddresses.filter(
          address => address !== action.address
        )
      }

    default:
      return state
  }
}
