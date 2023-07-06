import { Box, ScrollView, VStack, Text, HStack, Pressable } from 'native-base'
import React, { useCallback } from 'react'
import { Entypo } from '@expo/vector-icons';
import { MyCard } from '../card/MyCard';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProps } from '../../navigations/NavigationParamType';
import { ScrollViewProps } from 'react-native/Libraries/Components/ScrollView/ScrollView';
interface Props {
    title: string,
    children: React.ReactNode
    ScrollViewProps?: ScrollViewProps
}

export const MyScrollCardList = ({ ...props }: Props) => {
    const navigation = useNavigation<NavigationScreenProps>()
    const handler = useCallback(() => {
        console.log('Clicked');
        navigation.navigate('HomeStack')
    }, [])
    return (
        <VStack>
            <Pressable onPress={handler} >
                <HStack justifyContent={'space-between'} mx={4} mb={2}>
                    <Text bold fontSize={'md'}>
                        {props.title}
                    </Text>
                    <Box>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </Box>
                </HStack>
            </Pressable>
            <ScrollView horizontal {...props.ScrollViewProps}
            // mr={2} ml={2}
            >
                {props.children}
            </ScrollView>
        </VStack>
    )
}
