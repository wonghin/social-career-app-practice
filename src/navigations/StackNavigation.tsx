import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeNavigation from './HomeNavigation';
import { NavigationScreenProps, RootStackParamList } from './NavigationParamType';
import RestaurantDetailsScreen from '../screens/searchScreen/RestaurantDetailsScreen';
import LoginScreen from '../screens/login/LoginScreen';
import { HomeStackScreen } from '../screens/HomeScreen/HomeStackScreen';
import { Box } from 'native-base';
import { RouteConfigComponent } from '@react-navigation/native';
import { View } from 'react-native';
import { TaskScreen } from '../screens/task/TaskScreen';



const RootStack = createStackNavigator<RootStackParamList>();


interface ScreenArray {
    name: keyof RootStackParamList,
    component: any
}

const screenArray: ScreenArray[] = [
    {
        name: 'HomeStack',
        component: HomeStackScreen
    }
]


const getScreens = (screenArray: ScreenArray[]) => {
    return screenArray.map((item) => {
        return <RootStack.Screen key={item.name}
            options={{
                headerBackTitleVisible: false,

            }}
            name={item.name} component={item.component} />
    })
}


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

            <RootStack.Screen
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false

                }}
                name={'HomeStack'} component={HomeStackScreen} />
            <RootStack.Screen
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false

                }}
                name={'TaskStack'} component={TaskScreen} />

            {/* {getScreens(screenArray)} */}


        </RootStack.Navigator>
    )
}

export default StackNavigation