import { Box, Center, HStack, Icon, Pressable, ScrollView, Text, VStack, useDisclose } from 'native-base'
import React from 'react'
import { MyCard } from '../../components/card/MyCard'
import { windowWidth } from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../../navigations/NavigationParamType';
import { useStackNavigationStore } from '../../hooks/useStackNavigationStore';
import { Feather } from '@expo/vector-icons';
import { AdjustSearch } from '../../components/adjust/AdjustSearch';

export const HomeStackScreen = ({ navigation }: Navigation) => {
    const { title } = useStackNavigationStore()
    const headerBack = () => {
        navigation.goBack()
    }

    const headerRight = () => {

    }


    return (
        <>
            <Box w={windowWidth} bg={'white'} safeAreaTop shadow={4}>
                <VStack mx={4} space={3}>
                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                        <Pressable onPress={headerBack}>
                            <Icon as={<Feather name="chevron-left" />} size={'md'} color={'black'} />
                        </Pressable>

                        <AdjustSearch />
                    </HStack>
                    <Box mb={2}>
                        <Text fontSize={'xl'} bold>{title}</Text>
                    </Box>
                </VStack>
            </Box>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box ml={4} my={4}>
                    <Text color={'gray'}>
                        探索全部 10 個義工機會
                    </Text>

                </Box>

                <Box mx={4} >
                    <MyCard
                        organisation={'123'}
                        activityTitle={'123'}
                        date={'123'}
                        enrollNumber={'123'}
                        w={windowWidth}
                    />
                </Box>
                <Box mx={4} mt={8}>
                    <MyCard
                        organisation={'123'}
                        activityTitle={'123'}
                        date={'123'}
                        enrollNumber={'123'}
                        w={windowWidth}
                    />
                </Box>
                <Box mx={4} mt={8}>
                    <MyCard
                        organisation={'123'}
                        activityTitle={'123'}
                        date={'123'}
                        enrollNumber={'123'}
                        w={windowWidth}
                    />
                </Box>
                <Box mx={4} mt={8}>
                    <MyCard
                        organisation={'123'}
                        activityTitle={'123'}
                        date={'123'}
                        enrollNumber={'123'}
                        w={windowWidth}
                    />
                </Box>


            </ScrollView>

        </>


    )
}
