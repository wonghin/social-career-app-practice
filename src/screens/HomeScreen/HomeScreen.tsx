import { Box, Button, Center, FavouriteIcon, HStack, ScrollView, Spacer, Stack } from 'native-base'
import React from 'react'
import { Navigation } from '../../navigations/NavigationParamType'
import { MyButton } from '../../components/button/MyButton'
import { windowHeight, windowWidth } from '../../styles/styles'

import { DynamicComponent } from '../../components/dynamicComponent/DynamicComponent'
import { FullButton } from '../../components/button/FullButton'
import { useStackNavigationStore } from '../../hooks/useStackNavigationStore'

const resData = [
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
        bg: 'amber.200',
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
        bg: 'amber.100',
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
        // bg: 'white',
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
        bg: 'amber.100',
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

    return (

        <ScrollView showsVerticalScrollIndicator={false} >
            <ScrollView horizontal bg={'amber.200'} h={windowHeight * 0.64}
                directionalLockEnabled pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                <Box safeAreaTop width={windowWidth} bg={'blue.100'} alignItems={'center'} justifyContent={'center'}>image</Box>
                <Box safeAreaTop width={windowWidth} bg={'blue.200'} alignItems={'center'} justifyContent={'center'}>image</Box>
                <Box safeAreaTop width={windowWidth} bg={'blue.300'} alignItems={'center'} justifyContent={'center'}>image</Box>
                <Box safeAreaTop width={windowWidth} bg={'blue.400'} alignItems={'center'} justifyContent={'center'}>image</Box>


            </ScrollView>
            <HStack space={12} mt={4}>
                <Box ml={4} >
                    <MyButton icon={<FavouriteIcon />} text={'探索義工機會'} />
                </Box>
                <Box>
                    <MyButton icon={<FavouriteIcon />} text={'探索活動'} />
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