import { StyleSheet } from 'react-native'
import theme from '../../config/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white[700]
  },
  name: {
    textTransform: 'capitalize'
  }
})
