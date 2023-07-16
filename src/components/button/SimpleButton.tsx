import { Button } from 'native-base'
import { IButtonComponentType } from 'native-base/lib/typescript/components/primitives/Button/types'
import React from 'react'
import { GestureResponderEvent, PressableProps } from 'react-native'


interface Props {
    children: React.ReactNode | string
    myStyle?: IButtonComponentType
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}

export const SimpleButton = ({ ...props }: Props) => {
    return (
        <Button px={6} style={{ alignSelf: 'flex-start' }} bg={'Temp.200'} _pressed={{ bg: 'Temp.300', shadow: 4 }}
            {...props.myStyle} onPress={props.onPress} _text={{ color: 'black' }}>
            {props.children}
        </Button>
    )
}
