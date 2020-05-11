import React from 'react'
import { TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import MapView, { Marker } from 'react-native-maps'
import { isNil } from 'lodash'
import styles from './UserMap.style'
import NavigationButton from '../../components/navigationButton'
import { generateBack } from '../../helpers/navigation'
import { buttons, labels } from '../../config/translations'

function UserMap ({ lang, navigation, userLocation }) {
  const [userSearch, setUserSearch] = React.useState('')

  return (
    <View style={styles.container}>
      {!isNil(userLocation) && (
        <MapView
          initialRegion={{
            ...userLocation,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          scrollEnabled
          showsMyLocationButton
          showsUserLocation
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          zoomEnabled
        >
          <Marker
            coordinate={userLocation}
          />
        </MapView>
      )}
      <TextInput
        onChangeText={(text) => setUserSearch(text)}
        value={userSearch}
        placeholder={labels.TYPE_LOCATION[lang]}
        style={styles.formInput}
      />
      <View style={styles.bottomNavigation}>
        <NavigationButton
          label={buttons.BACK[lang]}
          secondary
          onPress={generateBack({ navigation })}
        />
        <NavigationButton
          label={buttons.SKIP[lang]}
          onPress={generateBack({ navigation })}
        />
      </View>
    </View>
  )
}

UserMap.propTypes = {
  lang: PropTypes.string,
  navigation: PropTypes.object,
  userLocation: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  })
}

export default UserMap
