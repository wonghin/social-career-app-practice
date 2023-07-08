import { Box, Center, Divider, ScrollView, VStack, Text } from 'native-base'
import React from 'react'
import CenterComponent from '../../components/CenterComponent'
import { Profile } from './Profile'
import { ListButton } from '../../components/button/LIstButton'




const SettingScreen = () => {
    return (
        <ScrollView>
            <VStack mx={4} mt={2} space={8}>
                <Profile />
            </VStack>
            <Divider mt={8} mb={4} />
            <VStack space={4} mx={4}>
                <Text bold fontSize={'lg'}>Information</Text>
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
            </VStack>
            <Divider mt={8} mb={4} />
            <VStack space={4} mx={4}>
                <Text bold fontSize={'lg'}>Information</Text>
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
            </VStack>
            <Divider mt={8} mb={4} />
            <VStack space={4} mx={4}>
                <Text bold fontSize={'lg'}>Information</Text>
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
                <ListButton showRightIcon={true} title={'123'} showSubTitle={false} />
            </VStack>

        </ScrollView>
    )
}

export default SettingScreen