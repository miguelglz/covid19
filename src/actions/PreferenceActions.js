import {
  SET_LANGUAGE
} from './types/PreferencesTypes'

export function setLanguage (lang) {
  return {
    type: SET_LANGUAGE,
    payload: {
      lang
    }
  }
}
