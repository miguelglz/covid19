import React from 'react'
import { Text } from 'react-native'

export function generateOnPress ({ name, short }) {
  return <Text>{`${name} - ${short}`}</Text>
}
