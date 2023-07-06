import { Box, Button, Center, FavouriteIcon, HStack, ScrollView, Spacer } from 'native-base'
import React from 'react'
import CenterComponent from '../../components/CenterComponent'
import { Navigation, NavigationScreenProps } from '../../navigations/NavigationParamType'
import { useNavigation } from '@react-navigation/native'
import { MyButton } from '../../components/button/MyButton'
import { windowHeight } from '../../styles/styles'
import { MyScrollCardList } from '../../components/scrollCardList/MyScrollCardList'
import { MyCard } from '../../components/card/MyCard'

const HomeScreen = ({ navigation }: Navigation): JSX.Element => {
    return (

        <ScrollView >
            <ScrollView horizontal bg={'amber.200'} h={windowHeight * 0.64} directionalLockEnabled >
                <Box safeAreaTop size={200} bg={'blue.100'}>10</Box>

            </ScrollView>
            <HStack space={12} mt={4}>
                <Box ml={4} >
                    <MyButton icon={<FavouriteIcon />} text={'探索義工機會'} />
                </Box>
                <Box>
                    <MyButton icon={<FavouriteIcon />} text={'探索活動'} />
                </Box>
            </HStack>
            <Spacer my={4} />

            <MyScrollCardList title={'社職推介'} >
                <Box ml={4}>
                    <MyCard
                        organisation={'香港世界宣明會'}
                        activityTitle={'舊書回收義賣大行動 2023'}
                        date={'7月1日 - 9月30日'}
                        enrollNumber={'不設限額'} />

                </Box>
                <Box ml={4}>
                    <MyCard
                        organisation={'香港世界宣明會'}
                        activityTitle={'舊書回收義賣大行動 2023'}
                        date={'7月1日 - 9月30日'}
                        enrollNumber={'不設限額'} />

                </Box>


            </MyScrollCardList>




        </ScrollView>
    )
}

export default HomeScreen