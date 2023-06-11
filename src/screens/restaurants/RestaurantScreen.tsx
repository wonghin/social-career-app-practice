import React from 'react'
import CenterComponent from '../../components/CenterComponent'
import { Box, Button, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Navigation, NavigationScreenProps, RootStackParamList } from '../../navigations/NavigationParamType'
import { StackScreenProps } from '@react-navigation/stack'


const RestaurantScreen = ({ navigation }: Navigation): JSX.Element => {
    return (
        <CenterComponent>
            <Box>Restaurants</Box>
            <HStack space={10}>
                <Button w={50}>
                    No
                </Button>
                <Button w={50} onPress={() => navigation.navigate('RestaurantDetails')}>
                    Yes
                </Button>
            </HStack>
        </CenterComponent>
    )
}

export default RestaurantScreen