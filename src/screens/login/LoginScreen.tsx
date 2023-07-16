import React from 'react'
import CenterComponent from '../../components/CenterComponent'
import { Box, Button, HStack, Input, VStack, Text, Center, Stack, Pressable, Icon, Flex } from 'native-base'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { NavigationScreenProps } from '../../navigations/NavigationParamType'
import { useNavigation } from '@react-navigation/native'
import { MyButton } from '../../components/button/MyButton'
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { windowWidth } from '../../styles/styles'
import { useUserInfoStore } from '../../hooks/useUserInfoStore'

const MyExample = () => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Box safeAreaTop alignItems={'center'} justifyContent={'center'} flex={1}
                bg='white'
            >
                <Box _text={{ fontWeight: 'bold', fontSize: '4xl' }} mb={16}>
                    Food Tinder
                </Box>


                <VStack width={"90%"} space={1}>
                    <Input _input={{ h: 10 }} placeholder='phone number, username or email' />
                    <Input _input={{ h: 10 }} placeholder='password' />
                    <Button variant={'link'} justifyContent={'flex-end'}
                        _text={{ fontSize: 12, fontWeight: 'bold' }}
                    >
                        Forgot password?
                    </Button>
                    <Button mt={2} borderRadius={999} >

                        Login
                    </Button>

                    <VStack alignItems={'center'} space={10} mt={8}>
                        <Button variant={'link'} _text={{ fontWeight: 'bold' }}>Continue as Nathan Borror</Button>
                        <HStack alignItems={'center'} space={2} px={marginEdge}>
                            <Box width={'50%'} borderTopWidth={1} borderColor={'gray.300'}></Box>
                            <Box _text={{ color: 'gray.500' }}>OR</Box>
                            <Box width={'50%'} borderTopWidth={1} borderColor={'gray.300'}></Box>
                        </HStack>
                        <HStack alignItems={'center'}>
                            <Text color={'gray.500'}>Don't have an account?</Text>
                            <Button variant={'link'} _text={{ fontWeight: 'bold', }}>Sign Up</Button>
                            <Text>.</Text>
                        </HStack>
                    </VStack>
                </VStack>


            </Box>
        </TouchableWithoutFeedback >
    )
}



const MyExample2 = () => {
    const userInfo = useUserInfoStore()
    const navigation = useNavigation<NavigationScreenProps>()
    const handlerLogin = () => {
        userInfo.setToken('123')
        navigation.navigate('Settings')
    }
    return (
        <>
            <Center mt={8} >
                <Stack alignItems={'center'} space={10}>
                    <Text bold fontSize={20}>登記/登入</Text>
                    <Box w={windowWidth * 0.7} h={150} bg={'gray.300'} shadow={4}></Box>
                </Stack>
                <Stack mt={8} space={8}>
                    <Pressable bg={'white'} pl={4} w={300} borderRadius={'lg'} borderWidth={1} py={2} onPress={handlerLogin}>
                        <HStack space={9} alignItems={'center'}>
                            <Icon as={<AntDesign name="apple1" />} color={'black'} size={'md'} />
                            <Box>
                                <Text bold>使用 Apple ID</Text>
                            </Box>
                        </HStack>
                    </Pressable>
                    <Pressable bg={'white'} pl={4} w={300} borderRadius={'lg'} borderWidth={1} py={2} onPress={handlerLogin}>
                        <HStack space={9} alignItems={'center'}>
                            <Icon as={<AntDesign name="google" />} color={'black'} size={'md'} />
                            <Box>
                                <Text bold>使用 Google帳戶</Text>
                            </Box>
                        </HStack>
                    </Pressable>
                    <Pressable bg={'white'} pl={4} w={300} borderRadius={'lg'} borderWidth={1} py={2} onPress={handlerLogin}>
                        <HStack space={9} alignItems={'center'}>
                            <Icon as={<SimpleLineIcons name="screen-smartphone" />} color={'black'} size={'md'} />
                            <Box>
                                <Text bold>使用手機電話號碼</Text>
                            </Box>
                        </HStack>
                    </Pressable>
                    <Pressable bg={'white'} pl={4} w={300} borderRadius={'lg'} borderWidth={1} py={2} onPress={handlerLogin}>
                        <HStack space={9} alignItems={'center'}>
                            <Icon as={<MaterialCommunityIcons name="email-outline" />} color={'black'} size={'md'} />
                            <Box>
                                <Text bold>使用電郵地址</Text>
                            </Box>
                        </HStack>
                    </Pressable>

                </Stack>
                <Flex w={windowWidth * 0.7} mt={8} direction="row" flexWrap={'wrap'}>
                    <Text color={'white'}>當你繼續登記登入帳戶，即代表你同意社稷的</Text>
                    <Text underline  >服務條款</Text>
                    <Text color={'white'} >，</Text>
                    <Text underline  >私隱政策</Text>
                    <Text color={'white'} >，</Text>
                    <Text underline  >個人資料</Text>
                    <Text underline color={'white'}>及</Text>
                    <Text >個人資料收集聲明</Text>
                </Flex>


            </Center >
        </>
    )
}


const marginEdge = 10
const LoginScreen = () => {
    return (
        <MyExample2 />
    )
}

export default LoginScreen