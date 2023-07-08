import { Box, ScrollView, VStack, Text, HStack, Pressable } from 'native-base'
import React, { useCallback } from 'react'
import { Entypo } from '@expo/vector-icons';
import { MyCard } from '../card/MyCard';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProps } from '../../navigations/NavigationParamType';
import { ScrollViewProps } from 'react-native/Libraries/Components/ScrollView/ScrollView';
import { StyleProp, ViewStyle } from 'react-native';
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack';

export interface ScrollCardListProps {
    title: string,
    subTitle?: string,
    children: React.ReactNode
    ScrollViewProps?: ScrollViewProps
    contentContainerStyle?: StyleProp<ViewStyle>
    myStyle?: IVStackProps

    showRightIcon: boolean
    showSubTitle: boolean
}



export const ScrollCardList = ({ ...props }: ScrollCardListProps) => {
    const navigation = useNavigation<NavigationScreenProps>()
    const handler = useCallback(() => {
        console.log('Clicked');
        navigation.navigate('HomeStack')
    }, [])
    return (
        <VStack {...props.myStyle} pb={4}>
            <Pressable onPress={handler} mx={4} pt={4}>
                <HStack justifyContent={'space-between'} >
                    <Text bold fontSize={'md'}>
                        {props.title}
                    </Text>
                    {
                        props.showRightIcon &&
                        <Box>
                            <Entypo name="chevron-small-right" size={24} color="black" />
                        </Box>
                    }
                </HStack>
                {
                    props.showSubTitle &&
                    <Text bold fontSize={'xs'} mb={2} color={'gray.500'}>
                        {props?.subTitle}
                    </Text>
                }
            </Pressable>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal {...props.ScrollViewProps}
                contentContainerStyle={props.contentContainerStyle}

            // mr={2} ml={2}
            >
                {props.children}
            </ScrollView>
        </VStack>
    )
}
