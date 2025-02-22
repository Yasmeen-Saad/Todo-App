import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import TodoDetails from './TodoDetails';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name='Home' component={Home} options={{
                headerShown: false
            }}/>
            <Stack.Screen name='TodoDetails' component={TodoDetails} options={{
                title: 'Todo Details'
            }}/>
        </Stack.Navigator>
    )
};

export default StackNavigator