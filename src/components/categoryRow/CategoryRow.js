import React from 'react'
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './CategoryRow.style'

function CategoryRow ({ label, icon, onPress, selected }) {
  const containerStyle = selected ? styles.selectedContainer : styles.regularContainer
  const textColor = selected ? styles.selectedText : styles.regularText
  const tintColor = selected ? styles.selectedIconColor : styles.regularIconColor

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={[styles.container, containerStyle]}>
        <View style={styles.leftRowContainer}>
          <Image source={{ uri: icon }} style={[styles.icon, tintColor]} />
          <Text style={[styles.name, textColor]}>{label}</Text>
        </View>
        <Text style={[styles.name, textColor]}>></Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

CategoryRow.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func
}

export default CategoryRow
