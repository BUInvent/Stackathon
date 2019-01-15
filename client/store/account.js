import axios from 'axios'

//ACTION TYPES
const ADD_ORDER = 'ADD_ORDER'
const ADD_ADDRESS = 'ADD_ADDRESS'
const REMOVE_ADDRESS = 'REMOVE_ADDRESS'
const GET_ORDERS = 'GET_ORDERS'

//DEFAULT STATE
const defaultOrders = []
const defaultAddresses = []

//ACTIONS
export const removeAddress = address => ({
  type: REMOVE_ADDRESS,
  address
})

export const addAddress = address => ({
  type: ADD_ADDRESS,
  address
})

const addOrder = order => {
  return {
    type: ADD_ORDER,
    order
  }
}

const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

//THUNKS
export const fetchOrders = () => async dispatch => {
  const res = await axios.get('/api/orders')
  dispatch(getOrders(res.data))
}

export const createOrder = orderinfo => async dispatch => {
  const res = await axios.post('/api/orders', orderinfo)
  dispatch(addOrder(res.data))
}

export default function(
  state = {orders: defaultOrders, userAddresses: defaultAddresses},
  action
) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.orders
      }
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, {...action.order}]
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
