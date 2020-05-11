import { AsyncStorage } from 'react-native'

export function generateHandlePress ({ handleSetLanguage, lang, onSelectCallBack }) {
  return async () => {
    try {
      handleSetLanguage(lang)
      await AsyncStorage.setItem(
        '@Language:selected',
        lang
      )
      onSelectCallBack()
    } catch (e) {
      console.error(e)
    }
  }
}
