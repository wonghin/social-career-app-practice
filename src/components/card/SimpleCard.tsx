import { Box, VStack, Text, Pressable } from 'native-base'
import React from 'react'
import { Datum, ListData } from '../dynamicComponent/DynamicComponent'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreenProps } from '../../navigations/NavigationParamType'
import { useStackNavigationStore } from '../../hooks/useStackNavigationStore'


const size = 150

export const SimpleCard = ({ ...data }: Partial<Datum>) => {
    const navigation = useNavigation<NavigationScreenProps>()
    const { setTitle } = useStackNavigationStore()
    const handler = () => {
        data.activityTitle !== undefined && setTitle(data.activityTitle)
        navigation.navigate('HomeStack')
    }
    return (
        <Pressable onPress={handler}>
            <VStack space={4}>
                <Box size={size} bg={'gray.300'} borderRadius={'lg'} shadow={4}>

                </Box>
                <Box w={size}>
                    <Text>
                        {data.activityTitle}
                    </Text>
                </Box>
            </VStack>

        </Pressable>
    )
}
