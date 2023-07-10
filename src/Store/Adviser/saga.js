import axios from '../../Routes/AxiosConfig'
import { fork, put, all, takeLatest, select } from 'redux-saga/effects'
import {
  ADD_ADVISER_CALL,
  ADVISER_STATUS,
  DELETE_ADVISER,
  GET_ADVISER_LIST,
  GET_ADVISER_PROFILE_INFO,
  GET_DROPDOWN_ADVISER_DROPDOWN_VALUE,
  GET_SINGLE_ADVISER,
  UPDATE_ADVISER,
} from './actionTypes'
import {
  getAdviserList,
  getAdviserListSuccess,
  getAdviserProfileInfoSuccess,
  getDropdownAdviserSuccess,
  getSingleAdviserSuccess,
} from './actions'
import { sagaErrorHandler } from '../../Shared/HelperMethods/SagaErrorHandler'
import { toast } from 'react-toastify'
import { makeSelectAuthToken } from '../selector'

function* getAllDropdownValueReq() {
  const token = yield select(makeSelectAuthToken())
  try {
    const response = yield axios.get(`admin/advisor/getAllDropDownValues`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    yield put(getDropdownAdviserSuccess(response.data.data))
  } catch (error) {
    yield sagaErrorHandler(error.response.data)
  }
}

function* AddAdviserCalRequest({ payload }) {
  const token = yield select(makeSelectAuthToken())
  payload.setIsLoading(true)
  try {
    const response = yield axios.post(`admin/advisor/add`, payload.formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    toast.success(response.data.message)
    payload.formik.resetForm()
    payload.history.push('/advisorListing')
    payload.setIsLoading(false)
  } catch (error) {
    payload.setIsLoading(false)
    yield sagaErrorHandler(error.response.data)
  }
}

function* updateAdviserCalRequest({ payload }) {
  const token = yield select(makeSelectAuthToken())
  payload.setIsLoading(true)
  try {
    const response = yield axios.post(
      `admin/advisor/update`,
      payload.formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    payload.setIsLoading(false)
    payload.formik.resetForm()
    toast.success(response.data.message)
    payload.history.push('/advisorListing')
  } catch (error) {
    payload.setIsLoading(false)
    yield sagaErrorHandler(error.response.data)
  }
}

function* getAdviserProfileInfoRequest({ payload }) {
  const token = yield select(makeSelectAuthToken())
  try {
    const response = yield axios.get(`admin/advisor/get/${payload}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    yield put(getAdviserProfileInfoSuccess(response.data.data))
  } catch (error) {
    yield sagaErrorHandler(error.response.data)
  }
}

function* getSingleAdviserRequest({ payload }) {
  const token = yield select(makeSelectAuthToken())
  try {
    const response = yield axios.get(`admin/advisor/get/${payload}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = {
      email: response.data.data.email,
      name: response.data.data.name,
      badges: {
        value: response.data.data.badges,
        label: response.data.data.badges,
      },
      intro: response.data.data.intro,
      location: response.data.data.location,
      responseRate: response.data.data.responseRate,
      responseTime: response.data.data.responseTime,
      dealsAquired: response.data.data.dealsAquired,
      preferedDealSize: response.data.data.PrefferedDealSize,
      onNamiSince: response.data.data.onNamiSince,
      dealsClosed: response.data.data.dealsClosed,
      expertise: response.data.data.AdvisorExpertises.map(
        (obj) => obj.Expertise,
      ),
      shortBio: response.data.data.shortBio,
      linkedIn: response.data.data.linkedIn,
      website: response.data.data.website,
      otherExperience: response.data.data.otherExperience,
    }
    console.log('dataaaa', data)
    yield put(getSingleAdviserSuccess(data))
  } catch (error) {
    yield sagaErrorHandler(error.response.data)
  }
}

function* getAdviserListRequest({ payload }) {
  const { searchAdviser, page } = payload
  const token = yield select(makeSelectAuthToken())
  try {
    const response = yield axios.get(
      `admin/advisor/getAll?page=${page}&search=${searchAdviser}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    yield put(getAdviserListSuccess(response.data.data))
  } catch (error) {
    yield sagaErrorHandler(error.response.data)
  }
}

function* deleteAdviserRequest({ payload }) {
  const token = yield select(makeSelectAuthToken())
  try {
    yield axios.delete(`admin/advisor/delete/${payload.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    toast.success('Adviser add successfully')
    yield put(
      getAdviserList({
        searchAdviser: payload.searchAdviser,
        page: payload.page,
      }),
    )
  } catch (error) {
    yield sagaErrorHandler(error.response.data)
  }
}

function* adviserStatusRequest({ payload }) {
  const token = yield select(makeSelectAuthToken())
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    let data = {}
    const response = yield axios.patch(
      `admin/advisor/changeStatus/${payload.id}`,
      data,
      headers,
    )
    toast.success(response.data.message)
    yield put(
      getAdviserList({
        searchAdviser: payload.searchAdviser,
        page: payload.page,
      }),
    )
  } catch (error) {
    yield sagaErrorHandler(error.response.data)
  }
}

export function* watchGetAllDropdownValue() {
  yield takeLatest(GET_DROPDOWN_ADVISER_DROPDOWN_VALUE, getAllDropdownValueReq)
}
export function* watchAddAdviserCalRequest() {
  yield takeLatest(ADD_ADVISER_CALL, AddAdviserCalRequest)
}
export function* watchSetAdviserProfileInfo() {
  yield takeLatest(GET_ADVISER_PROFILE_INFO, getAdviserProfileInfoRequest)
}
export function* watchGetAdviserList() {
  yield takeLatest(GET_ADVISER_LIST, getAdviserListRequest)
}
export function* watchDeleteAdviser() {
  yield takeLatest(DELETE_ADVISER, deleteAdviserRequest)
}
export function* watchAdviserStatus() {
  yield takeLatest(ADVISER_STATUS, adviserStatusRequest)
}
export function* watchGetSingleAdviser() {
  yield takeLatest(GET_SINGLE_ADVISER, getSingleAdviserRequest)
}
export function* watchUpdateAdviser() {
  yield takeLatest(UPDATE_ADVISER, updateAdviserCalRequest)
}

export default function* adviserSaga() {
  yield all([
    fork(watchGetAllDropdownValue),
    fork(watchAddAdviserCalRequest),
    fork(watchSetAdviserProfileInfo),
    fork(watchGetAdviserList),
    fork(watchDeleteAdviser),
    fork(watchAdviserStatus),
    fork(watchGetSingleAdviser),
    fork(watchUpdateAdviser),
  ])
}
