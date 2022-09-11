import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import AgentDetails from '../screens/AgentDetails';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();





const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={AgentDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router