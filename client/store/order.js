import axios from 'axios'

//ACTION TYPES
const GET_ORDERS = 'GET_ORDERS'
const UPDATE_ORDER = 'UPDATE_ORDER'
const ACTIVATE_ORDER = 'ACTIVATE_ORDER'

//DEFAULT VALUES
const defaultOrders = []
const defaultOrder = {status: 'Created'}

//ACTION CREATORS
const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

const updateOrder = order => {
  return {
    type: UPDATE_ORDER,
    order
  }
}

const activateOrder = order => {
  return {
    type: ACTIVATE_ORDER,
    order
  }
}

//THUNKS
export const fetchOrders = (id = -1) => async dispatch => {
  if (id !== -1) {
    const res = await axios.get(`/api/users/${id}`)
    const orders = res.data[2]
    dispatch(getOrders(orders))
  } else {
    const res = await axios.get('/api/orders/')
    const orders = res.data
    dispatch(getOrders(orders))
  }
}

export const getCart = id => async dispatch => {
  const res = await axios.get(`/api/orders/active/${id}`)
  dispatch(activateOrder(res.data))
}

export const orderUpdate = (id, orderinfo) => async dispatch => {
  // id = state.order.order.id / orderinfo = {userId, DONTNEEDdestination, [{productId, qty}]}
  const updatedOrder = await axios.put(`/api/orders/${id}`, orderinfo)
  dispatch(updateOrder(updatedOrder))
}

//REDUCER
export default function(
  state = {orders: defaultOrders, order: defaultOrder},
  action
) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.orders
      }
    case ACTIVATE_ORDER:
      return {
        ...state,
        order: action.order
      }
    case UPDATE_ORDER:
      const newOrders = state.orders.map(order => {
        if (order.id !== action.order.id) {
          return order
        } else {
          return action.order
        }
      })
      if (action.order.status === 'Placed') {
        return {
          ...state,
          orders: newOrders,
          order: defaultOrder
        }
      } else {
        return {
          ...state,
          orders: newOrders,
          order: action.order
        }
      }
    default:
      return state
  }
}
