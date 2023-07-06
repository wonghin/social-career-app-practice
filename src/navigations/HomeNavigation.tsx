import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import SettingScreen from '../screens/SettingScreen';
import { Box, View } from 'native-base';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import RestaurantScreen from '../screens/restaurants/RestaurantScreen';
import { RootStackParamList } from './NavigationParamType';





const Tab = createBottomTabNavigator<RootStackParamList>()
const HomeNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen
                options={{
                    // headerShown: true,
                }}
                name='Home' component={HomeScreen} />
            <Tab.Screen name='Restaurant' component={RestaurantScreen} />

            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default HomeNavigation