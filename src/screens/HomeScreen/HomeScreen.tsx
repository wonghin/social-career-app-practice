import { Box, Button, Center, FavouriteIcon, HStack, ScrollView, Spacer, Stack } from 'native-base'
import React, { useEffect, useRef } from 'react'
import { Navigation } from '../../navigations/NavigationParamType'
import { MyButton } from '../../components/button/MyButton'
import { windowHeight, windowWidth } from '../../styles/styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DynamicComponent, ListData } from '../../components/dynamicComponent/DynamicComponent'
import { FullButton } from '../../components/button/FullButton'
import { useStackNavigationStore } from '../../hooks/useStackNavigationStore'
import { useScrollToTop } from '@react-navigation/native'

export const resData: ListData[] = [
    {
        componentType: 'MyScrollCardList',
        title: '社職推介',
        subTitle: '適合生活忙碌的你',
        // bg: 'amber.200',
        data: [
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
        ]
    },
    {
        componentType: 'MyScrollCardList',
        title: '短時間完成的服務',
        subTitle: '適合生活忙碌的你',
        bg: 'Temp.50',
        data: [
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },

        ]

    },
    {
        componentType: 'MySimpleScrollCardList',
        title: '熱門工機會',
        subTitle: '',
        bg: 'Temp.100',
        data: [
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },

        ]

    },
    {
        componentType: 'MyScrollCardList',
        title: '短時間完成的服務',
        subTitle: '適合生活忙碌的你',
        bg: 'Temp.50',
        data: [
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },

        ]

    },
    {
        componentType: 'MyScrollCardList',
        title: '短時間完成的服務',
        subTitle: '適合生活忙碌的你',
        bg: 'Temp.100',
        data: [
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },
            {
                organisation: '香港世界宣明會',
                activityTitle: '舊書回收義賣大行動 2023',
                date: '7月1日 - 9月30日',
                enrollNumber: '不設限額'
            },

        ]

    },
]


const HomeScreen = ({ navigation }: Navigation): JSX.Element => {

    const { setData } = useStackNavigationStore()
    const ref = useRef(null);

    useScrollToTop(ref);




    return (

        <ScrollView showsVerticalScrollIndicator={false} bg={'white'} ref={ref}>
            <ScrollView horizontal bg={'white'} h={windowHeight * 0.64}
                directionalLockEnabled pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                <Box safeAreaTop width={windowWidth} bg={'yellow.300'} alignItems={'center'} justifyContent={'center'} _text={{ fontWeight: 'bold' }} >image</Box>
                <Box safeAreaTop width={windowWidth} bg={'purple.300'} alignItems={'center'} justifyContent={'center'} _text={{ fontWeight: 'bold' }}>image</Box>
                <Box safeAreaTop width={windowWidth} bg={'orange.300'} alignItems={'center'} justifyContent={'center'} _text={{ fontWeight: 'bold' }}>image</Box>


            </ScrollView>
            <HStack space={12} mt={4}>
                <Box ml={4} >
                    <MyButton icon={<MaterialCommunityIcons name="hand-heart-outline" />} text={'探索義工機會'} />
                </Box>
                <Box>
                    <MyButton icon={<Ionicons name="md-color-palette-outline" />} text={'探索活動'} />
                </Box>
            </HStack>
            <Spacer mt={4} />
            <Stack >
                {
                    resData.map((value, index) =>
                        <DynamicComponent {...value} key={index} />
                    )
                }
            </Stack>

            <Box mx={4} my={8}>
                <FullButton />
            </Box>


        </ScrollView>
    )
}

export default HomeScreen