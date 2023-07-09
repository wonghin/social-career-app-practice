import React from 'react'
import { Actionsheet, Box, Button, Center, useDisclose, Text, Pressable, Icon } from "native-base";
import { Feather } from '@expo/vector-icons';
import { windowHeight } from '../../styles/styles';




export const AdjustSearch = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    return <Center>
        <Pressable onPress={onOpen}>
            <Icon as={<Feather name="search" />} size={'md'} color={'black'} />
        </Pressable>
        <Actionsheet isOpen={isOpen} onClose={onClose}  >
            <Actionsheet.Content>
                {/* <Box w="100%" h={60} px={4} justifyContent="center">
                    <Text fontSize="16" color="gray.500" _dark={{
                        color: "gray.300"
                    }}>
                        Albums
                    </Text>
                </Box> */}
                <Actionsheet.Item>Delete</Actionsheet.Item>
                <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
                <Actionsheet.Item>Play</Actionsheet.Item>
                <Actionsheet.Item>Favourite</Actionsheet.Item>
                <Actionsheet.Item>Cancel</Actionsheet.Item>

            </Actionsheet.Content>
        </Actionsheet>
    </Center>;
}