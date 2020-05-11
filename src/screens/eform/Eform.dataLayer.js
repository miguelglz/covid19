import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import Eform from './Eform'
import { titles } from '../../config/translations'

export function EformDataLayer ({ route: { params: { id, description, title } }, lang, navigation }) {
  return <Eform
    id={id}
    description={description ? description[lang] : titles.DESCRIBE_THE_ISSUE[lang]}
    navigation={navigation}
    title={title ? title[lang] : titles.CATEGORY[lang]}
    lang={lang}
  />
}

const mapStateToProps = ({ preferences: { selectedLang } }) => {
  return { lang: selectedLang }
}

EformDataLayer.propTypes = {
  route: PropTypes.object,
  lang: PropTypes.string,
  navigation: PropTypes.object
}

export default connect(mapStateToProps)(EformDataLayer)
