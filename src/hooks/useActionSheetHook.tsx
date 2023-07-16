import { Box, Icon, Pressable } from 'native-base';
import React, { useRef, useState } from 'react'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { windowHeight } from '../styles/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const useActionSheetHook = () => {
    const actionSheetRef = useRef<ActionSheetRef>(null);
    const insets = useSafeAreaInsets();
    const [isOpen, setIsOpen] = useState(false)
    const open = () => {
        actionSheetRef.current?.show();
    }
    const close = () => {
        actionSheetRef.current?.hide();
    }
    const handler = () => {
        setIsOpen(!isOpen)
    }
    // useEffect(() => {
    //     isOpen ? open() : close()
    // }, [isOpen])
    const Component = () => {
        <>
            {/* <Pressable onPress={open}>
                <Box>123</Box>
            </Pressable> */}
            <ActionSheet ref={actionSheetRef}
                containerStyle={{
                    height: windowHeight - 100,
                }}

                // drawUnderStatusBar={false}
                useBottomSafeAreaPadding
                drawUnderStatusBar={false}
            >
                <Box>
                    123
                </Box>

            </ActionSheet>


        </>

    }

    return { open, close, actionSheetRef }




}
