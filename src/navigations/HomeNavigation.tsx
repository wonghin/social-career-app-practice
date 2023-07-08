import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import SettingScreen from '../screens/setting/SettingScreen';
import { RootStackParamList } from './NavigationParamType';
import SearchScreen from '../screens/searchScreen/SearchScreen';
import { useTheme } from 'native-base';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { ScheduleScreen } from '../screens/schedule/ScheduleScreen';





const Tab = createBottomTabNavigator<RootStackParamList>()
const HomeNavigation = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#000000"
        }}>
            <Tab.Screen
                options={{
                    // headerShown: true,
                    title: '主頁'
                }}
                name='Home' component={HomeScreen} />
            <Tab.Screen
                options={{
                    title: '搜尋'
                }}
                name='Search' component={SearchScreen} />

            <Tab.Screen
                options={{
                    title: '日程',
                    headerShown: true
                }}
                name="Schedule" component={ScheduleScreen} />
            <Tab.Screen
                options={{
                    title: '帳戶',
                    headerShown: true
                }}
                name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default HomeNavigation