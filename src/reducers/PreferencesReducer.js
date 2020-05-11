import {
  SET_LANGUAGE
} from '../actions/types/PreferencesTypes'

const INITIAL_STATE = {
  selectedLang: null
}

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        selectedLang: payload.lang
      }

    default:
      return state
  }
}
