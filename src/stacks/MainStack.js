import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import SingUp from '../screens/SignUp'
import MainTab from '../stacks/MainTab'

const Stack = createNativeStackNavigator()

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SingUp} />
            <Stack.Screen name="MainTab" component={MainTab} />
        </Stack.Navigator>
    )
}