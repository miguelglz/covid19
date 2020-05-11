import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { generateStackScreen, generateGoToRoute } from './helpers/navigation'
import { languages } from './config/settings'
import theme from './config/theme'
import mapIcon from './assets/images/map'

import CategoryList from './screens/categoryList'
import SelectLanguage from './screens/selectLanguage'
import Eform from './screens/eform'
import UserMap from './screens/userMap'

const Stack = createStackNavigator()
const routes = [
  {
    component: SelectLanguage,
    name: 'SelectLanguage',
    params: { languages },
    options: { headerShown: false }
  },
  {
    component: CategoryList,
    name: 'CategoryList',
    options: ({ navigation }) => ({
      title: 'COVID-19 Support',
      headerLeft: null,
      headerRight: () => (
        <TouchableOpacity
          onPress={generateGoToRoute({ navigation, routeName: 'UserMap' })}
        >
          <Image source={{ uri: mapIcon }} style={styles.mapIcon} />
        </TouchableOpacity>
      )
    })
  },
  {
    component: Eform,
    name: 'Eform',
    options: {
      title: 'COVID-19 Support',
      headerLeft: null
    }
  },
  {
    component: UserMap,
    name: 'UserMap',
    options: {
      title: 'COVID-19 Support',
      headerLeft: null
    }
  }
]

function AppNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SelectLanguage'}>
        { routes.map((screen, index) => generateStackScreen({ index, ...screen, Stack })) }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  mapIcon: {
    width: 30,
    height: 30,
    marginRight: theme.spacing.margin['md']
  }
})

export default AppNavigator
