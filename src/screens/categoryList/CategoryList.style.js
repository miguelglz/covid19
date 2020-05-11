import { StyleSheet } from 'react-native'
import theme from '../../config/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white[700]
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.font['title'],
    marginBottom: theme.spacing.margin['md']
  },
  headerContainer: {
    marginVertical: theme.spacing.margin['lg'],
    paddingHorizontal: theme.spacing.padding['sm']
  },
  bottomNavigation: {
    flexDirection: 'row',
    paddingBottom: theme.spacing.padding['lg'],
    justifyContent: 'center'
  }
})
