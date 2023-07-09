import React, { useCallback, useEffect, useRef, useState } from 'react'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { Box, Button, Center, CheckIcon, Checkbox, CloseIcon, HStack, Icon, Pressable, ScrollView, Select, Text, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { windowHeight } from '../../styles/styles';
import { Entypo } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const locationData = {
    title: '地點',
    location: [
        {
            title: '香港島',
        },
        {
            title: '九龍',
        },
        {
            title: '新界',
        },
        {
            title: '香港以外',
        },
        {
            title: '網上'
        }
    ]
}



export const Test = () => {
    const actionSheetRef = useRef<ActionSheetRef>(null);
    const insets = useSafeAreaInsets();
    const [isOpen, setIsOpen] = useState(false)
    const open = () => {
        actionSheetRef.current?.show();
    }
    const close = () => {
        actionSheetRef.current?.hide();
    }
    const handler = () => {
        setIsOpen(!isOpen)
    }
    // useEffect(() => {
    //     isOpen ? open() : close()
    // }, [isOpen])
    return (
        <>
            <Pressable onPress={open}>
                <Icon as={<Feather name="search" />} size={'md'} color={'black'} />
            </Pressable>
            <ActionSheet ref={actionSheetRef}
                containerStyle={{
                    height: windowHeight - 100,
                }}

                // drawUnderStatusBar={false}
                useBottomSafeAreaPadding
                drawUnderStatusBar={false}
                onChange={(position, height) => {
                    // Position is 0 if action sheet has reached top.
                    const hasReachedTop = position === 10;
                    // Get the offset from bottom
                    const offsetFromBottom = height - position;
                }}

            >

                <VStack mx={4} safeAreaTop safeAreaBottom flex={1} >
                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                        <Pressable onPress={close}>
                            <Icon as={<Entypo name="cross" />} color={'black'} size={'md'} />
                        </Pressable>
                        <Text fontSize='lg' bold>篩選</Text>
                        <Text fontSize={'md'} underline color={'gray.500'}>全部清除</Text>
                    </HStack>
                    <ScrollView showsVerticalScrollIndicator={false}
                    // mb={120}
                    >
                        <VStack mt={8} space={8}>
                            <Text bold fontSize={'lg'}>{locationData.title}</Text>
                            {
                                locationData.location.map((value, index) =>

                                    <HStack key={index} alignItems={'center'} justifyContent={'space-between'} >
                                        <Checkbox value="one" size={'lg'} _text={{ fontSize: 'md' }}>
                                            {value.title}
                                        </Checkbox>
                                        <Icon as={<Entypo name="chevron-small-down" />} color={'black'} size={'lg'} />
                                    </HStack>
                                )
                            }
                        </VStack>

                        <Box mt={10}>
                            <Text fontSize={'lg'} bold>出席日子</Text>
                            <VStack space={2} mt={4}>
                                <Box borderWidth={1} style={{ alignSelf: 'flex-start' }} px={6} py={2} pr={8} borderRadius={'lg'}>
                                    <Text> 平日 (週一至週五)</Text>
                                </Box>
                                <Box borderWidth={1} style={{ alignSelf: 'flex-start' }} px={6} py={2} pr={8} borderRadius={'lg'}>
                                    <Text> 週末 (週六及週日)</Text>
                                </Box>

                            </VStack>
                        </Box>

                        <Box mt={10}>
                            <Text fontSize={'lg'} bold>出席日子</Text>
                            <VStack space={2} mt={4}>
                                <Box borderWidth={1} style={{ alignSelf: 'flex-start' }} px={6} py={2} pr={8} borderRadius={'lg'}>
                                    <Text> 平日 (週一至週五)</Text>
                                </Box>
                                <Box borderWidth={1} style={{ alignSelf: 'flex-start' }} px={6} py={2} pr={8} borderRadius={'lg'}>
                                    <Text> 週末 (週六及週日)</Text>
                                </Box>

                            </VStack>
                        </Box>

                        <Box mt={10}>
                            <Text fontSize={'lg'} bold>出席日子</Text>
                            <VStack space={2} mt={4}>
                                <Box borderWidth={1} style={{ alignSelf: 'flex-start' }} px={6} py={2} pr={8} borderRadius={'lg'}>
                                    <Text> 平日 (週一至週五)</Text>
                                </Box>
                                <Box borderWidth={1} style={{ alignSelf: 'flex-start' }} px={6} py={2} pr={8} borderRadius={'lg'}>
                                    <Text> 週末 (週六及週日)</Text>
                                </Box>

                            </VStack>
                        </Box>



                    </ScrollView>
                    {/* <Box bg={'white'} pb={20} position={'absolute'} bottom={0} right={0} left={0} >
                        <Button>顯示結果</Button>
                    </Box> */}
                    <Box bg={'white'} mt={5}>
                        <Button>顯示結果</Button>
                    </Box>


                </VStack>
            </ActionSheet>


        </>
    );
}
