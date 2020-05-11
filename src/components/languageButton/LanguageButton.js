import React from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { generateHandlePress } from './LanguageButton.utils'
import styles from './LanguageButton.style'

function LanguageButton ({ handleSetLanguage, lang, onSelectCallBack }) {
  const hanglePress = generateHandlePress({
    handleSetLanguage,
    lang: lang.short,
    onSelectCallBack
  })

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={hanglePress}
    >
      <Text style={styles.name}>{lang.country}</Text>
    </TouchableWithoutFeedback>
  )
}

LanguageButton.propTypes = {
  handleSetLanguage: PropTypes.func,
  lang: PropTypes.shape({
    name: PropTypes.string,
    short: PropTypes.string
  }),
  onSelectCallBack: PropTypes.func
}

LanguageButton.defaultProps = {
  handleSetLanguage: Function.prototype,
  onSelectCallBack: Function.prototype
}

export default LanguageButton
