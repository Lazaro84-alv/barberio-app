import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default () => {
    <Stack.Navigator>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Preload" component={SignIn} />
        <Stack.Screen name="Preload" component={SingUp} />
    </Stack.Navigator>
}