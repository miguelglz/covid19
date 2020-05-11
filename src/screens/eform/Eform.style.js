import { StyleSheet } from 'react-native'
import theme from '../../config/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white[700],
    paddingHorizontal: theme.spacing.padding['sm']
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.font['title'],
    marginBottom: theme.spacing.margin['md']
  },
  headerContainer: {
    marginVertical: theme.spacing.margin['lg'],
  },
  bottomNavigation: {
    flexDirection: 'row',
    paddingBottom: theme.spacing.padding['lg'],
    justifyContent: 'center'
  },
  formInput: {
    paddingTop: theme.spacing.padding['md'],
    paddingHorizontal: theme.spacing.padding['md'],
    borderWidth: 1,
    borderColor: theme.colors.purple[900],
    borderRadius: 20,
    height: 200,
    marginBottom: theme.spacing.margin['lg']
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between'
  }
})
