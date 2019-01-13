import axios from 'axios'

//ACTION TYPES
const GET_CATEGORIES = 'GET_CATEGORIES'
const ADD_CATEGORY = 'ADD_CATEGORY'

//DEFAULT STATE
const defaultCategories = []

//ACTION CREATORS
const getCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

//THUNKS
export const fetchCategories = () => async dispatch => {
  const res = await axios.get('/api/categories')
  dispatch(getCategories(res.data))
}

export const createCategory = info => async dispatch => {
  const res = await axios.post('/api/categories', info)
  dispatch(addCategory(res.data))
}

//REDUCER
export default function(state = {categories: defaultCategories}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category]
      }
    default:
      return state
  }
}
