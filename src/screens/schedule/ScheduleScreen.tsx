import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProcessingScreen } from './ProcessingScreen';
import { ConfirmScreen } from './ConfirmScreen';
import { Box, useTheme } from 'native-base';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
    const theme = useTheme();
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    shadowOpacity: 0.2,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 3,
                    // height: 48

                },
                tabBarIndicatorStyle: {
                    backgroundColor: theme.colors.orange[500]
                },
                tabBarLabelStyle: {
                    // fontSize: 10,
                },
            }}

        >
            <Tab.Screen
                options={{
                    title: '已確認'
                }}
                name="Confirm" component={ConfirmScreen} />
            <Tab.Screen
                options={{
                    title: '處理中'
                }}
                name="Processing" component={ProcessingScreen} />
        </Tab.Navigator>
    )
}

export const ScheduleScreen = () => {
    return (
        <TopNavigation />
    )
}



