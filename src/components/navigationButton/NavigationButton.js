import React from 'react'
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './NavigationButton.style'

function NavigationButton ({ disabled, label, onPress, secondary }) {
  const btnBg = secondary ? styles.secondaryBackground : styles.regularBackground
  const labelColor = secondary ? styles.secondaryText : styles.regularText
  const btnDisabled = disabled ? styles.disabledContainer : styles.regularContainer

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={[styles.container, btnBg, btnDisabled]}>
        <Text style={[styles.label, labelColor]}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

NavigationButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
  secondary: PropTypes.bool
}

NavigationButton.defaultProps = {
  disabled: false,
  secondary: false
}

export default NavigationButton
