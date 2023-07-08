import { Box, Button, ScrollView, Stack, Text } from 'native-base'
import React from 'react'

export const EmptyListScreen = () => {
    return (
        <Stack alignItems={'center'} justifyItems={'center'} mt={100} space={54}>
            <Box >
                <Text bold fontSize={'md'} color={'gray.500'}>你暫時沒有已確認的報名</Text>
            </Box>

            <Box size={200} bg={'blue.200'} alignItems={'center'} justifyContent={'center'}>
                Image
            </Box>

            <Box >
                <Text bold fontSize={'md'} color={'gray.500'}>查看其他熱門活動</Text>
            </Box>

            <Button px={6}>
                立即探索 !
            </Button>

        </Stack>
    )
}
