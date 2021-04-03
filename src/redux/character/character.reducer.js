import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from './character.types'

const INITIAL_STATE = {
  fetching: false,
  characters: [],
  error: null
}

export default function characterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, characters: action.payload };
    case API_CALL_FAILURE:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}