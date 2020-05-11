import React from 'react'
import { TextInput, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { generateHandleOnPress } from './Eform.utils'
import styles from './Eform.style'
import NavigationButton from '../../components/navigationButton'
import { generateGoToRoute, generateBack } from '../../helpers/navigation'
import { buttons, labels } from '../../config/translations'

function Eform ({ description, lang, navigation, title, id }) {
  const [formInput, setFormInput] = React.useState('')

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          multiline
          numberOfLines={4}
          onChangeText={(text) => setFormInput(text)}
          value={formInput}
          placeholder={labels.REPORT_PLACEHOLDER[lang]}
          style={styles.formInput}
        />
        <View style={styles.bottomNavigation}>
          <NavigationButton
            label={buttons.BACK[lang]}
            secondary
            onPress={generateBack({ navigation })}
          />
          <NavigationButton
            label={buttons.NEXT[lang]}
            disabled={formInput === ''}
            onPress={generateHandleOnPress({ generateGoToRoute, navigation, formInput, id })}
          />
        </View>
      </View>
    </View>
  )
}

Eform.propTypes = {
  categoryList: PropTypes.array,
  description: PropTypes.string,
  lang: PropTypes.string,
  navigation: PropTypes.object,
  title: PropTypes.string
}

Eform.defaultProps = {
  description: '',
  title: 'Category'
}

export default Eform
