import { ADD_TODO } from '../actions'

const initialState = [
  {
    text: 'Use Redux'
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}
