import { Box, Button, HStack, Icon, Pressable, Text } from 'native-base'
import React from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons';


export const FullButton = () => {
    return (
        <Pressable
            bg={'Temp.200'}
            // leftIcon={<Icon as={<FontAwesome name="home" size={24} color="black" />}
            //     size="sm" />}
            borderRadius={'xl'}
            justifyContent={'space-between'}
            p={4}

        >
            <HStack alignItems={'center'} justifyContent={'space-between'}>
                <HStack alignItems={'center'} space={4}>
                    <FontAwesome name="home" size={24} color="black" />
                    <Text bold fontSize={'md'}>所有機構</Text>
                </HStack>

                <Box>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                </Box>

            </HStack>

        </Pressable>
    )
}
