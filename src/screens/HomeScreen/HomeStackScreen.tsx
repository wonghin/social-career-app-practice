import { Box, Center, ScrollView, Text } from 'native-base'
import React from 'react'
import { MyCard } from '../../components/card/MyCard'
import { windowWidth } from '../../styles/styles';


export const HomeStackScreen = () => {
    return (
        <ScrollView >
            <Box ml={4} my={4}>
                <Text color={'gray'}>
                    探索全部 10 個義工機會
                </Text>

            </Box>

            <Box mx={4} >
                <MyCard
                    organisation={'123'}
                    activityTitle={'123'}
                    date={'123'}
                    enrollNumber={'123'}
                    w={windowWidth}
                />
            </Box>
            <Box mx={4} mt={8}>
                <MyCard
                    organisation={'123'}
                    activityTitle={'123'}
                    date={'123'}
                    enrollNumber={'123'}
                    w={windowWidth}
                />
            </Box>
            <Box mx={4} mt={8}>
                <MyCard
                    organisation={'123'}
                    activityTitle={'123'}
                    date={'123'}
                    enrollNumber={'123'}
                    w={windowWidth}
                />
            </Box>
            <Box mx={4} mt={8}>
                <MyCard
                    organisation={'123'}
                    activityTitle={'123'}
                    date={'123'}
                    enrollNumber={'123'}
                    w={windowWidth}
                />
            </Box>


        </ScrollView>

    )
}
