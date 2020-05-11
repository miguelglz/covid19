import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './SelectLanguage.style'
import LanguageButton from '../../components/languageButton'
import { generateGoToRoute } from '../../helpers/navigation'
import mockData from '../../config/heyirys_covid.json'

function SelectLanguage ({ route: { params: { languages } }, navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your country</Text>
      { languages.map(lang =>
        <LanguageButton
          key={lang.short}
          lang={lang}
          onSelectCallBack={generateGoToRoute({ navigation, routeName: 'CategoryList', params: { categoryMap: mockData.categories } })}
        />
      ) }
    </View>
  )
}

SelectLanguage.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object
}

export default SelectLanguage
