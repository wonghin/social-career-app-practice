import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react'
import SettingScreen from '../screens/setting/SettingScreen';
import { RootStackParamList } from './NavigationParamType';
import SearchScreen from '../screens/searchScreen/SearchScreen';
import { Box, HStack, Icon, Pressable, useDisclose, useTheme } from 'native-base';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { ScheduleScreen } from '../screens/schedule/ScheduleScreen';
import { customeTheme } from '../theme/customeTheme';

import { Ionicons, Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { windowHeight } from '../styles/styles';
import { useActionSheetHook } from '../hooks/useActionSheetHook';
import LoginScreen from '../screens/login/LoginScreen';

import { Entypo } from '@expo/vector-icons';
import { TabButtonActionSheet } from '../components/actionSheet/TabButtonActionSheet';
import { useUserInfoStore } from '../hooks/useUserInfoStore';




const Tab = createBottomTabNavigator<RootStackParamList>()
const HomeNavigation = () => {
    const action = useActionSheetHook()

    const userInfo = useUserInfoStore()
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#000000",
            tabBarStyle: {
                backgroundColor: customeTheme.colors.Temp[50],
            }
        }}>
            <Tab.Screen
                options={{
                    // headerShown: true,
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon as={<Ionicons name="home" />} size={6} color={customeTheme.colors.Main[500]} />
                            : <Icon as={<Ionicons name="home-outline" />} size={6} />,
                    title: '主頁'
                }}


                name='Home' component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon as={<Feather name="search" />} size={6} color={customeTheme.colors.Main[500]} mr={2} />
                            : <Icon as={<Feather name="search" />} size={6} mr={2} />,
                    title: '搜尋',


                }}
                name='Search' component={SearchScreen} />



            {
                userInfo.token === '' ?
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused }) =>
                                focused ? <Icon as={<Ionicons name="calendar" />} size={6} color={customeTheme.colors.Main[500]} />
                                    : <Icon as={<Ionicons name="calendar-outline" />} size={6} />,
                            title: '日程',
                            headerShown: true,
                            headerTitle: '你的日程',
                            headerTitleAlign: "left",
                            headerTitleStyle: { fontWeight: 'bold' },
                            headerBackgroundContainerStyle: {
                            },
                            headerShadowVisible: false,


                            tabBarButton: (props) =>
                                <>
                                    <TouchableOpacity {...props} onPress={action.open} activeOpacity={1}>
                                    </TouchableOpacity>
                                    <TabButtonActionSheet
                                        myRef={action.actionSheetRef}
                                        close={action.close}
                                        children={<LoginScreen />}
                                    />
                                </>
                        }}
                        listeners={{

                            tabPress: e => {
                                // Prevent default action
                                e.preventDefault();
                            },
                        }}
                        name='loginTab' component={View} />
                    :

                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused }) =>
                                focused ? <Icon as={<Ionicons name="calendar" />} size={6} color={customeTheme.colors.Main[500]} />
                                    : <Icon as={<Ionicons name="calendar-outline" />} size={6} />,
                            title: '日程',
                            headerShown: true,
                            headerTitle: '你的日程',
                            headerTitleAlign: "left",
                            headerTitleStyle: { fontWeight: 'bold' },
                            headerBackgroundContainerStyle: {
                            },
                            headerShadowVisible: false,
                        }}


                        name="Schedule" component={ScheduleScreen} />
            }

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon as={<Ionicons name="person-circle" size={24} color="black" />} size={6} color={customeTheme.colors.Main[500]} />
                            : <Icon as={<Ionicons name="person-circle-outline" size={24} color="black" />} size={6} />,
                    title: '帳戶',
                    headerShown: true,
                    headerTitleAlign: "left",
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerTitleContainerStyle: {

                    },


                }}
                name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default HomeNavigation