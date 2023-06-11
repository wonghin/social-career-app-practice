import { Box, Button, Center } from 'native-base'
import React from 'react'
import CenterComponent from '../components/CenterComponent'
import { NavigationScreenProps } from '../navigations/NavigationParamType'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation<NavigationScreenProps>()
    return (
        <CenterComponent>
            <Box >Home</Box>
            <Button onPress={() => navigation.navigate('login')}>Login</Button>
        </CenterComponent>
    )
}

export default HomeScreen