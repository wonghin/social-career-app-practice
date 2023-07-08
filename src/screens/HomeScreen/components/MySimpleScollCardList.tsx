import { Box, HStack, ScrollView } from 'native-base'
import React from 'react'
import { ScrollCardList } from '../../../components/scrollCardList/ScrollCardList'
import { MyCard } from '../../../components/card/MyCard'
import { ListData } from '../../../components/dynamicComponent/DynamicComponent'
import { SimpleCard } from '../../../components/card/SimpleCard'



export const MySimpleScollCardList = ({ ...listData }: ListData) => {
    return (
        <ScrollCardList title={listData.title} subTitle={listData.subTitle} myStyle={{ bg: listData?.bg }}
            showRightIcon={false} showSubTitle={false}>
            <HStack mt={4}>
                {
                    listData.data.map((value, index) =>
                        <Box ml={4} key={index}>
                            <SimpleCard {...value} />
                        </Box>
                    )
                }

            </HStack>
        </ScrollCardList>
    )
}
