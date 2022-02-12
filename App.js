import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import UserContextProvider from './src/contexts/UserContext'
import MainStack from './src/stacks/MainStack'

export default () => {
  return (
    <UserContextProvider>
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
      </UserContextProvider>
  )
}