
export const apiCallRequest = () => ({
  type: 'API_CALL_REQUEST'
})
export const apiCallSuccess = (characters) => ({
  type: 'API_CALL_SUCCESS',
  payload: characters
})
export const apiCallFailure = (error) => ({
  type: 'API_CALL_FAILURE',
  payload: error
})