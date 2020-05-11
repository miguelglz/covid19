import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../../actions/PreferenceActions'
import LanguageButton from './LanguageButton'

export function LanguageButtonDataLayer (props) {
  return <LanguageButton {...props} />
}

const mapDispatchToProps = {
  handleSetLanguage: setLanguage
}

LanguageButtonDataLayer.propTypes = {
  lang: PropTypes.shape({
    name: PropTypes.string,
    short: PropTypes.string
  }),
  onSelectCallBack: PropTypes.func
}

LanguageButtonDataLayer.defaultProps = {
  onSelectCallBack: Function.prototype
}

export default connect(null, mapDispatchToProps)(LanguageButtonDataLayer)
