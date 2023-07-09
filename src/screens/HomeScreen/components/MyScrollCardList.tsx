import React, { useEffect } from 'react'
import { ScrollCardList } from '../../../components/scrollCardList/ScrollCardList'
import { Box } from 'native-base'
import { MyCard } from '../../../components/card/MyCard'
import { ComponentTypes } from '../../../types/types';
import { ListData } from '../../../components/dynamicComponent/DynamicComponent';
import { useStackNavigationStore } from '../../../hooks/useStackNavigationStore';


export const MyScrollCardList = ({ ...listData }: ListData) => {

    return (
        <ScrollCardList title={listData.title} subTitle={listData.subTitle} myStyle={{ bg: listData?.bg }} showRightIcon={true} showSubTitle={true}>
            {
                listData.data.map((value, index) =>
                    <Box ml={4} key={index}>
                        <MyCard
                            organisation={value.organisation}
                            activityTitle={value.activityTitle}
                            date={value.date}
                            enrollNumber={value.enrollNumber} />
                    </Box>
                )
            }
        </ScrollCardList>
    )

}
