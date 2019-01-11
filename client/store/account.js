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

const addressOne = {
  name: 'Big Foot',
  address: '1234 Milky Way',
  city: 'Columbus',
  state: 'Ohio',
  zip: 54321
}

const addressTwo = {
  name: 'Big Foot',
  address: '1234 Milky Way 345',
  city: 'Columbus',
  state: 'Ohio',
  zip: 54321
}

const defaultOrderedItems = []
for (let i = 0; i < 5; i++) {
  defaultOrderedItems.push(defaultProduct)
}

const defaultAddresses = [addressOne, addressTwo]

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
