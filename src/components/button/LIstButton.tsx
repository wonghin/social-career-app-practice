import { Box, HStack, Icon, Pressable, Text } from 'native-base'
import React from 'react'
import { ScrollCardListProps } from '../scrollCardList/ScrollCardList'

import { Entypo } from '@expo/vector-icons';


interface ListButtonProps extends Partial<ScrollCardListProps> {
    disable?: boolean
}

export const ListButton = ({ ...props }: ListButtonProps) => {

    const handler = () => {

    }
    return (
        <Pressable onPress={handler}>
            <HStack justifyContent={'space-between'} >
                <Text fontSize={'md'} color={props.disable ? 'gray.400' : 'black'}>
                    {props.title}
                </Text>
                {
                    props.showRightIcon &&
                    <Box>
                        <Icon as={<Entypo name="chevron-small-right" />}
                            color={props.disable ? 'gray.400' : 'black'}
                            size={'lg'}
                        />

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
