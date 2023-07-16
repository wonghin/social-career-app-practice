import React from 'react'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'
import { windowHeight } from '../../styles/styles'
import { customeTheme } from '../../theme/customeTheme'
import { Box, HStack, Icon, Pressable } from 'native-base'
import { GestureResponderEvent } from 'react-native'
import { Entypo } from '@expo/vector-icons';


interface Props {
    myRef: React.RefObject<ActionSheetRef>
    close: ((event: GestureResponderEvent) => void) | null | undefined
    children: React.ReactNode
}

export const TabButtonActionSheet = ({ ...props }: Props) => {
    return (
        <ActionSheet ref={props.myRef}
            containerStyle={{
                height: windowHeight,
                backgroundColor: customeTheme.colors.Main[400]
            }}
            useBottomSafeAreaPadding
            drawUnderStatusBar={false}
        >
            <HStack safeAreaTop>
                <Pressable onPress={props.close}>
                    <Icon as={<Entypo name="cross" />} color={'black'} size={'md'} ml={4} />

                </Pressable>
            </HStack>
            <Box mt={4}>
                {props.children}
            </Box>

        </ActionSheet>
    )
}
