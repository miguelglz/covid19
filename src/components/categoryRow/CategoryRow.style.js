import { StyleSheet } from 'react-native'
import theme from '../../config/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.padding['sm'],
    paddingVertical: theme.spacing.padding['md'],
    borderBottomColor: theme.colors.grey[300],
    borderBottomWidth: 1
  },
  selectedContainer: {
    backgroundColor: theme.colors.purple[900]
  },
  regularContainer: {
    backgroundColor: theme.colors.white[700]
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: theme.spacing.margin['md']
  },
  name: {
    textTransform: 'capitalize'
  },
  selectedText: {
    color: theme.colors.white[700]
  },
  regularText: {
    color: theme.colors.purple[900]
  },
  selectedIconColor: {
    tintColor: theme.colors.white[700]
  },
  regularIconColor: {
    tintColor: theme.colors.purple[900]
  },
  leftRowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
