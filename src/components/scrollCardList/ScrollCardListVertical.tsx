import { ScrollView } from 'native-base'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export const ScrollCardListVertical = ({ ...props }: Props) => {
    return (
        <ScrollView >
            {props.children}
        </ScrollView>
    )
}
