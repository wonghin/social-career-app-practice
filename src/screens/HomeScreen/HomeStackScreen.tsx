import { Box, Center, HStack, Icon, Pressable, ScrollView, Text, VStack, useDisclose } from 'native-base'
import React, { useRef } from 'react'
import { MyCard } from '../../components/card/MyCard'
import { windowWidth } from '../../styles/styles';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { Navigation, NavigationScreenProps } from '../../navigations/NavigationParamType';
import { useStackNavigationStore } from '../../hooks/useStackNavigationStore';
import { Feather } from '@expo/vector-icons';
import { AdjustSearch } from '../../components/adjust/AdjustSearch';
import { resData } from './HomeScreen';
import { RefreshControl } from 'react-native-gesture-handler';
import { FlashList } from '@shopify/flash-list';


export const MyHeader = () => {
    const { title } = useStackNavigationStore()
    const navigation = useNavigation<NavigationScreenProps>()
    const headerBack = () => {
        navigation.goBack()
    }

    // const headerRight = () => {

    // }

    const ref = useRef(null)
    useScrollToTop(ref)
    return <Box w={windowWidth} bg={'white'} safeAreaTop shadow={4} ref={ref}>
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
}

export const HomeStackScreen = ({ navigation }: Navigation) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);



    return (
        <>

            <MyHeader />
            <FlashList
                scrollEventThrottle={5}
                estimatedItemSize={10}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={resData[0].data}
                renderItem={(item) => {

                    return (
                        <>
                            {item.index === 0 &&
                                <Box ml={4} my={4}>
                                    <Text color={'gray'}>
                                        探索全部 10 個義工機會
                                    </Text>

                                </Box>
                            }

                            <Box mx={4} mb={8}>
                                <MyCard
                                    {...item.item}
                                    w={windowWidth} />

                            </Box>
                        </>

                    )
                }}
            />
        </>


    )
}
