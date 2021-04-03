import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios'

import { apiCallSuccess, apiCallFailure } from './coffee.actions'

function fetchCharacters() {
  return axios({
    method: 'get',
    url: 'https://api.sampleapis.com/coffee/hot'
  })
}

function* workerSaga() {
  try {
    const res = yield call(fetchCharacters)
    const characters = res.data
    yield put(apiCallSuccess(characters))
  } catch (error) {
    yield put(apiCallFailure(error))
  }
}

export default function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga)
}