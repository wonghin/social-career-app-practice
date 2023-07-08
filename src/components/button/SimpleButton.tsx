import { Button } from 'native-base'
import { IButtonComponentType } from 'native-base/lib/typescript/components/primitives/Button/types'
import React from 'react'
import { GestureResponderEvent, PressableProps } from 'react-native'


interface Props {
    children: React.ReactNode | string
    myStyle?: IButtonComponentType
    myEvent?: ((event: GestureResponderEvent) => void) | null | undefined
}

export const SimpleButton = ({ ...props }: Props) => {
    return (
        <Button px={6} style={{ alignSelf: 'flex-start' }}
            {...props.myStyle} onPress={props.myEvent}>
            {props.children}
        </Button>
    )
}
