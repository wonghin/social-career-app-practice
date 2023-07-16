import { Box, HStack, Icon, Pressable, ScrollView, VStack, Text, Button } from 'native-base'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MyHeader } from '../HomeScreen/HomeStackScreen'
import { windowWidth } from '../../styles/styles'
import { AdjustSearch } from '../../components/adjust/AdjustSearch'
import { useNavigation, useScrollToTop } from '@react-navigation/native'
import { useStackNavigationStore } from '../../hooks/useStackNavigationStore'
import { NavigationScreenProps } from '../../navigations/NavigationParamType'
import { Feather } from '@expo/vector-icons';
import { Animated, LayoutChangeEvent, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


interface MyIconProps {
    children: React.ReactNode
    shadow: number
}
const MyIcon = ({ ...props }: MyIconProps) => {
    return (
        <Box
            bg={'white'} shadow={props.shadow === 0 ? 4 : undefined}
            h={10} w={10} alignItems={'center'} justifyContent={'center'}
            borderRadius={'full'}
        >

            <Icon as={props.children} size={'md'} color={'black'} />
        </Box>

    )
}



const scrollHorizontalTitle = [
    '基本資料',
    '描述',
    '時間表',
    '受惠者類別',
    '服務類別',
    '可持續發展目標',
    '義工角色',
    '所需語言',
    '年齡要求',
    '備註',
    '查詢',
];

const top = 12
interface Props {
    opacity: number
    scrollViewHandler: (index: number) => void
}


const HeaderTaskScreen = ({ ...props }: Props) => {
    // const { title } = useStackNavigationStore()
    const navigation = useNavigation<NavigationScreenProps>()
    const headerBack = () => {
        navigation.goBack()
    }
    const ref = useRef(null)
    useScrollToTop(ref)


    const [isPress, setIsPress] = useState(false)

    return (
        <>
            <Pressable
                onPress={headerBack}
                zIndex={2} position={'absolute'} top={top} left={4}
            >
                <MyIcon children={<Feather name="chevron-left" />} shadow={props.opacity} />
            </Pressable>

            <HStack zIndex={2} position={'absolute'} top={top} right={4} space={4}>
                {isPress ?
                    <Pressable onPress={() => setIsPress(!isPress)}>
                        <MyIcon children={<Ionicons name="heart" />} shadow={props.opacity} />
                    </Pressable>

                    :
                    <Pressable onPress={() => setIsPress(!isPress)}>
                        <MyIcon children={<Ionicons name="heart-outline" />} shadow={props.opacity} />
                    </Pressable>

                }
                <Pressable
                >
                    <MyIcon children={<Ionicons name="share-social-outline" />} shadow={props.opacity} />
                </Pressable>

            </HStack>
            <Box w={windowWidth} safeAreaTop shadow={4} ref={ref} position={'absolute'} zIndex={1} bg={'white'} opacity={props.opacity} >
                <Box h={68} />


                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginBottom: 4 }}
                >
                    {
                        scrollHorizontalTitle.map((value, index) =>
                            <Pressable mx={4} key={index} onPress={() => props.scrollViewHandler(index)}>
                                <Text>{value}</Text>
                            </Pressable>
                        )
                    }

                </ScrollView>
            </Box>
        </>

    )
}


export const TaskScreen = () => {
    const [value, setValue] = useState(0)
    const scrollViewRef = useRef(null);
    const [positions, setPositions] = useState([]);

    const handleScroll = useCallback((event: any) => {
        // const positionX = event.nativeEvent.contentOffset.x;
        const positionY = event.nativeEvent.contentOffset.y;
        // setScrollPosition(positionY);
        // console.log(positionY);
        if (positionY < 200 && positionY > 0) {
            setValue(positionY / 1000 * 5)
        } else if (positionY > 200) {
            setValue(1)
        } else if (positionY < 0) {
            setValue(0)
        }
    }, [])


    const handleLayout = useCallback((event: LayoutChangeEvent, index: number) => {
        const { y } = event.nativeEvent.layout;

        setPositions(prevPositions => {
            const newPositions = [...prevPositions];
            //@ts-ignore
            newPositions[index] = { y };
            return newPositions;
        });
    }, [])

    const handleButtonPress = (index: number) => {
        const elementPosition = index;
        const yOffset = -140;
        const yCoordinate = positions[elementPosition]['y'] + yOffset;

        //@ts-ignore
        scrollViewRef.current !== null && scrollViewRef.current.scrollTo({ y: yCoordinate, animated: true });


    }

    // useEffect(() => {
    //     console.log(positions);
    // }, [positions])


    return (
        <>
            <HeaderTaskScreen opacity={value} scrollViewHandler={handleButtonPress} />
            <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}

            >

                <Box safeArea w={windowWidth} h={300} bg={'gray.300'} />

                {
                    Array.from(Array(11)).map((value, index) =>
                        <Text
                            onLayout={(event) => handleLayout(event, index)}

                            key={index} my={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</Text>
                    )
                }
            </ScrollView>
        </>

    )

}
