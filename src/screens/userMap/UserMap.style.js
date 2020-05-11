import { StyleSheet } from 'react-native'
import theme from '../../config/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white[700],
    paddingHorizontal: theme.spacing.padding['sm'],
    justifyContent: 'space-between'
  },
  bottomNavigation: {
    flexDirection: 'row',
    paddingBottom: theme.spacing.padding['lg'],
    justifyContent: 'center'
  },
  formInput: {
    paddingVertical: theme.spacing.padding['sm'],
    paddingHorizontal: theme.spacing.padding['sm'],
    borderWidth: 1,
    borderColor: theme.colors.purple[900],
    borderRadius: 15,
    marginTop: theme.spacing.margin['lg'],
    backgroundColor: theme.colors.white[700]
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between'
  }
})
