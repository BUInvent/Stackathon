const ADD_ORDERED_ITEM = 'ADD_ITEM'
const ADD_ADDRESS = 'ADD_ADDRESS'

const defaultProduct = {
  title: 'title',
  price: 5.0,
  description: 'Placeholder Product',
  imgURL: '/default-image.jpg',
  dateOrdered: new Date(2019, 0, 3),
  dateDelivered: new Date(2019, 0, 25)
}

const defaultAddress = {
  name: 'Big Foot',
  address: '1234 Milky Way',
  city: 'Columbus',
  state: 'Ohio',
  zip: 54321
}

const defaultOrderedItems = []
for (let i = 0; i < 5; i++) {
  defaultOrderedItems.push(defaultProduct)
}

const defaultAddresses = []
for (let i = 0; i < 5; i++) {
  defaultAddresses.push(defaultAddress)
}

export default function(
  state = {
    orderedItems: defaultOrderedItems,
    userAddresses: defaultAddresses
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
        addresses: [...state.addresses, {...action.address}]
      }

    default:
      return state
  }
}
