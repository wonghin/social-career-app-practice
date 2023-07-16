import { Box, Button, Center, ScrollView, Stack, Text } from 'native-base'
import React from 'react'
import { SimpleButton } from '../../components/button/SimpleButton'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreenProps } from '../../navigations/NavigationParamType'

export const EmptyListScreen = () => {
    const navigation = useNavigation<NavigationScreenProps>()
    return (
        <Stack alignItems={'center'} justifyItems={'center'} mt={100} space={54}>
            <Box >
                <Text bold fontSize={'md'} color={'gray.500'}>你暫時沒有已確認的報名</Text>
            </Box>

            <Box size={200} bg={'blue.200'} alignItems={'center'} justifyContent={'center'} shadow={4}>
                Image
            </Box>

            <Box >
                <Text bold fontSize={'md'} color={'gray.500'}>查看其他熱門活動</Text>
            </Box>

            <Center>
                <SimpleButton children={'立即探索 !'} onPress={() => { navigation.navigate('Home') }} />
            </Center>

        </Stack>
    )
}
