import { StyleSheet } from 'react-native'
import theme from '../../config/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: theme.spacing.margin['md'],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.red[600],
    paddingVertical: theme.spacing.padding['sm'],
    borderRadius: 20
  },
  secondaryBackground: {
    backgroundColor: theme.colors.white[700]
  },
  regularBackground: {
    backgroundColor: theme.colors.red[600]
  },
  label: {
    textTransform: 'capitalize'
  },
  secondaryText: {
    color: theme.colors.red[600]
  },
  regularText: {
    color: theme.colors.white[700]
  },
  disabledContainer: {
    opacity: 0.5
  },
  regularContainer: {
    opacity: 1
  }
})
