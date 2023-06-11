import { Center } from 'native-base'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const CenterComponent = ({ children }: Props) => {
    return (
        <Center alignItems={'center'} h={'100%'}>
            {children}
        </Center>
    )
}

export default CenterComponent