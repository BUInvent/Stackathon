import axios from 'axios'

//ACTION TYPES
const ADD_REVIEW = 'ADD_REVIEW'
const REMOVE_REVIEW = 'REMOVE_REVIEW'
const GET_REVIEWS = 'GET_REVIEWS'

//DEFAULT STATE
const defaultReviews = []

//ACTION CREATORS
const getReviews = reviews => {
  return {
    type: GET_REVIEWS,
    reviews
  }
}

const addReview = review => {
  return {
    type: ADD_REVIEW,
    review
  }
}

const removeReview = id => {
  return {
    type: REMOVE_REVIEW,
    id
  }
}

//THUNK CREATORS
export const fetchReviews = () => async dispatch => {
  const res = await axios.get('/api/reviews')
  dispatch(getReviews(res.data))
}

export const deleteReview = id => async dispatch => {
  await axios.delete(`/api/reviews/${id}`)
  dispatch(removeReview(id))
}

export const createReview = review => async dispatch => {
  const res = await axios.post('/api/reviews', review)
  dispatch(addReview(res.data))
}

//REDUCER
export default function(state = {reviews: defaultReviews}, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.reviews
      }
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.review]
      }
    case REMOVE_REVIEW:
      const newReviews = state.reviews.map(review => {
        if (review.id !== action.id) {
          return review
        }
      })
      return {
        ...state,
        reviews: newReviews
      }
    default:
      return state
  }
}
