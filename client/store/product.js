import axios from 'axios'

//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const SELECT_PRODUCT = 'SELECT_PRODUCT'
const DESELECT_PRODUCT = 'DESELECT_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'

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

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
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

export const createProduct = productinfo => async dispatch => {
  const res = await axios.post('/auth/products', productinfo)
  dispatch(addProduct(res.data))
}

export const updateProduct = (productInfo, id) => async dispatch => {
  await axios.put(`/auth/products/${id}`, productInfo)
  dispatch(fetchProducts())
}

//REDUCER
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
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      }
    default:
      return state
  }
}
