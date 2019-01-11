import axios from 'axios'

//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const SELECT_PRODUCT = 'SELECT_PRODUCT'
const DESELECT_PRODUCT = 'DESELECT_PRODUCT'

//DEFAULT STATE
const defaultProducts = []
const defaultProduct = {}

//ACTIONS
const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

const selectProduct = product => {
  return {
    type: SELECT_PRODUCT,
    product
  }
}

export const deselectProduct = () => {
  return {
    type: DESELECT_PRODUCT
  }
}

//THUNKS
export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/auth/products')
  dispatch(getProducts(res.data))
}

export const pickProduct = id => async dispatch => {
  const res = await axios.get(`/auth/products/${id}`)
  dispatch(selectProduct(res.data))
}

export const categorySelect = id => async dispatch => {
  const res = await axios.get(`/auth/categories/${id}`)
  dispatch(getProducts(res.data))
}

export default function(
  state = {products: defaultProducts, selectedProduct: defaultProduct},
  action
) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.product
      }
    case DESELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: defaultProduct
      }
    default:
      return state
  }
}
