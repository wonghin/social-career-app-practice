import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeNavigation from './HomeNavigation';
import { RootStackParamList } from './NavigationParamType';
import RestaurantDetailsScreen from '../screens/restaurants/RestaurantDetailsScreen';
import LoginScreen from '../screens/login/LoginScreen';

const RootStack = createStackNavigator<RootStackParamList>();


const StackNavigation = () => {
    return (
        <RootStack.Navigator screenOptions={{
        }}>
            <RootStack.Screen
                options={{
                    headerShown: false
                }}

                name='HomeNavigation' component={HomeNavigation} />
            <RootStack.Screen
                name='RestaurantDetails' component={RestaurantDetailsScreen} />

            <RootStack.Screen name='login' component={LoginScreen} />

        </RootStack.Navigator>
    )
}

export default StackNavigation