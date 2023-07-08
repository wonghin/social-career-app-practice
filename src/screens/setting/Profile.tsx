import { Avatar, Box, Button, HStack, Icon, Pressable, Stack, Text, VStack } from 'native-base'
import React from 'react'
import { SimpleButton } from '../../components/button/SimpleButton'

interface Props {

}

export const Profile = () => {
    return (

        <VStack space={8} bg={'white'} pl={6} pt={8} pb={6} borderRadius={'xl'} shadow={'4'}>
            <HStack alignItems={'center'} space={8}>
                <Avatar bg="green.500" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }} mt={6} size={'lg'}>
                    AJ
                </Avatar>
                <Stack space={2}>
                    <Text bold fontSize={'lg'}>填寫你的名字</Text>
                    <Pressable>
                        <Text color={'gray.500'}>編輯帳戶</Text>
                    </Pressable>
                </Stack>

            </HStack>

            <SimpleButton children={'查看完整帳戶'} />

        </VStack>
    )
}
