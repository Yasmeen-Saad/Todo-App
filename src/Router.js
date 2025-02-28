import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Tasks from './Tasks';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Tabs.Navigator 
            screenOptions={({ route }) => ({
                headerTitleAlign: 'center', 
                tabBarShowLabel: false, 
                tabBarStyle: { borderTopWidth: 0, backgroundColor: '#fff', position: 'absolute', height : 50},
                tabBarIcon: ({ color='#000', size }) => {
                    let iconName;
                    if (route.name === 'Main') {
                      iconName ='home';
                    } else if (route.name === 'Tasks') {
                      iconName = 'list';
                    } else if (route.name === 'Settings') {
                      iconName = 'settings';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'black',
                  tabBarIconStyle: {margin : 5},
            })}>
            <Tabs.Screen name='Main' component={StackNavigator} options={{headerShown: false}}/>
            <Tabs.Screen name='Tasks' component={Tasks}/>
            <Tabs.Screen name='Settings' component={Settings}/>
        </Tabs.Navigator>
    </NavigationContainer>
  )
}