import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import Geolocation from '@react-native-community/geolocation'
import UserMap from './UserMap'

export function UserMapDataLayer ({ route: { params: { id, description, title } }, lang, navigation }) {
  const [userLocation, setUserLocation] = React.useState(null)

  React.useEffect(() => {
    Geolocation.requestAuthorization()
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => setUserLocation({ latitude, longitude }))
  })

  return (
    <UserMap
      navigation={navigation}
      userLocation={userLocation}
      lang={lang}
    />
  )
}

const mapStateToProps = ({ preferences: { selectedLang } }) => {
  return { lang: selectedLang }
}

UserMapDataLayer.propTypes = {
  userLocation: PropTypes.object,
  lang: PropTypes.string,
  navigation: PropTypes.object
}

export default connect(mapStateToProps)(UserMapDataLayer)
