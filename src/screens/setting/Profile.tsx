import { Avatar, Box, Button, HStack, Icon, Pressable, Stack, Text, VStack } from 'native-base'
import React from 'react'
import { SimpleButton } from '../../components/button/SimpleButton'
import { useUserInfoStore } from '../../hooks/useUserInfoStore'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreenProps } from '../../navigations/NavigationParamType'
import { useActionSheetHook } from '../../hooks/useActionSheetHook'
import { TabButtonActionSheet } from '../../components/actionSheet/TabButtonActionSheet'
import LoginScreen from '../login/LoginScreen'

interface Props {

}

const Login = () => {
    const action = useActionSheetHook()

    return (
        <>
            <SimpleButton children={'登入 / 登記'} onPress={action.open} />
            <TabButtonActionSheet
                myRef={action.actionSheetRef}
                close={action.close}
                children={<LoginScreen />} />
        </>
    )
}

export const Profile = () => {
    const userInfo = useUserInfoStore()

    return (

        <VStack space={8} bg={'white'} pl={6} pt={8} pb={6} borderRadius={'xl'} shadow={'4'}>
            <HStack alignItems={'center'} space={8}>
                {
                    userInfo.token === '' ?
                        <Avatar bg="Main.500" mt={6} size={'lg'} /> :
                        <Avatar bg="Main.500" source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }} mt={6} size={'lg'} />

                }
                <Stack space={2}>
                    <Text bold fontSize={'lg'}>{userInfo.token === "" ? '訪客' : '填寫你的名字'}</Text>
                    <Pressable>
                        {
                            userInfo.token === "" ?
                                <Text>你還未登入</Text> :
                                <Text color={'gray.500'} underline>編輯帳戶</Text>
                        }
                    </Pressable>
                </Stack>

            </HStack>
            {
                userInfo.token === '' ?
                    <Login /> :
                    <SimpleButton children={'查看完整帳戶'} />
            }

        </VStack>
    )
}
