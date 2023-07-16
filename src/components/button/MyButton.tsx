import { Box, HStack, Icon, Text } from 'native-base'
import React from 'react'



interface Props {
    icon: React.ReactNode,
    text: string
}

export const MyButton = ({ ...props }: Props) => {
    return (
        <HStack alignItems={'center'} space={3}>
            <Box size={10} bg={'amber.300'} alignItems={'center'} justifyContent={'center'} borderRadius={10}>
                <Icon as={props.icon} color={'black'} size={'md'} />
            </Box>
            <Box>
                <Text bold>{props.text}</Text>
            </Box>
        </HStack>
    )
}
