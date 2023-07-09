import { Box, HStack, Pressable, Text } from 'native-base'
import React from 'react'
import { ScrollCardListProps } from '../scrollCardList/ScrollCardList'

import { Entypo } from '@expo/vector-icons';



export const ListButton = ({ ...props }: Partial<ScrollCardListProps>) => {

    const handler = () => {

    }
    return (
        <Pressable onPress={handler}>
            <HStack justifyContent={'space-between'} >
                <Text fontSize={'md'}>
                    {props.title}
                </Text>
                {
                    props.showRightIcon &&
                    <Box>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </Box>
                }
            </HStack>
            {
                props.showSubTitle &&
                <Text bold fontSize={'xs'} mb={2} color={'gray.500'}>
                    {props?.subTitle}
                </Text>
            }
        </Pressable>
    )
}
