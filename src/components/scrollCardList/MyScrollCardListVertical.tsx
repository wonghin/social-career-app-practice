import { ScrollView } from 'native-base'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export const MyScrollCardListVertical = ({ ...props }: Props) => {
    return (
        <ScrollView >
            {props.children}
        </ScrollView>
    )
}
