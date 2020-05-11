import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import AppNavigator from './AppNavigator'
import { store } from './reducers'

export default class App extends Component {
  render () {
    return (
      <ReduxProvider store={store}>
        <AppNavigator />
      </ReduxProvider>
    )
  }
}
