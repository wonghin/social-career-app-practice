import { Box, VStack, Text, HStack } from 'native-base'
import React from 'react'
import { Ionicons, AntDesign, Octicons, Feather } from '@expo/vector-icons';
import { ResponsiveValue } from 'native-base/lib/typescript/components/types';


interface Props {
    organisation: string,
    activityTitle: string,
    date: string
    enrollNumber: string
    h?: ResponsiveValue<"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "px" | "0" | (string & {}) | (number & {}) | "container" | "3xs" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "full">
    w?: ResponsiveValue<"sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | "px" | "0" | (string & {}) | (number & {}) | "container" | "3xs" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "5/6">
}

export const MyCard = ({ ...props }: Props) => {
    return (
        <VStack space={1} >
            <Box h={props.h ? props.h : 200} bg={'blue.500'} borderRadius={10}>
                <Box
                    position={'absolute'}
                    bg={'white'}
                    shadow={'8'}
                    borderRadius={'full'}
                    size={10}
                    alignItems={'center'}
                    justifyContent={'center'}
                    opacity={0.9}
                    top={3}
                    right={3}
                >
                    <Ionicons name="heart-outline" size={20} color="black" />
                </Box>



                <HStack
                    position={'absolute'}
                    bottom={2}
                    left={2}
                    bg={'white'}
                    opacity={0.8}
                    // w={100}
                    borderRadius={'full'}
                    py={1}
                    alignItems={'center'}
                    space={2}
                >
                    <Box ml={4} mr={2}>
                        <Feather name="users" size={23} color="black" />
                    </Box>
                    <Box mr={4}>
                        <Text>
                            {props.enrollNumber}
                        </Text>

                    </Box>
                </HStack>

            </Box>

            <Text color={'gray'}>
                {props.organisation}
            </Text>

            <Text bold fontSize={'lg'}>
                {props.activityTitle}
            </Text>

            <HStack alignItems={'center'} space={3}>
                <Box>
                    <AntDesign name="calendar" size={16} color='gray' />
                </Box>
                <Text color={'gray'}>
                    {props.date}
                </Text>
            </HStack>


        </VStack>
    )
}
