import React from 'react'
import { Text } from 'native-base'
import { useUserInfoStore } from '../../hooks/useUserInfoStore'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreenProps } from '../../navigations/NavigationParamType'
import { Alert } from 'react-native'
export const Logout = () => {
    const userInfo = useUserInfoStore()
    const navigation = useNavigation<NavigationScreenProps>()
    const handlerLogout = () => {

        // userInfo.setToken('')
        // navigation.navigate('Home')
        Alert.alert('登出', '你確定要登出嗎？', [
            {
                text: '取消',
                onPress: () => { },
            },
            {
                text: '登出',
                onPress: () => {
                    userInfo.setToken('')
                    navigation.navigate('Home')
                },
                style: 'destructive',
            },

        ],

        )
    }



    return (
        <>
            {userInfo.token !== '' &&
                <Text underline color={'orange.500'} onPress={handlerLogout}>登出</Text>

            }
        </>
    )
}
