import { Box, VStack, Text } from 'native-base'
import React from 'react'
import { Datum, ListData } from '../dynamicComponent/DynamicComponent'


const size = 150

export const SimpleCard = ({ ...data }: Partial<Datum>) => {
    return (
        <VStack space={4}>
            <Box size={size} bg={'blue.500'} borderRadius={'lg'}>

            </Box>
            <Box w={size}>
                <Text>
                    {data.activityTitle}
                </Text>
            </Box>
        </VStack>
    )
}
