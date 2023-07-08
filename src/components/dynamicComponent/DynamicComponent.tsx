import React from 'react'
import { ComponentTypes } from '../../types/types'
import { MyScrollCardList } from '../../screens/HomeScreen/components/MyScrollCardList';
import { MySimpleScollCardList } from '../../screens/HomeScreen/components/MySimpleScollCardList';

export interface ListData {
    componentType: ComponentTypes | string;
    title: string;
    subTitle: string;
    data: Datum[];
    bg?: string;
}

export interface Datum {
    organisation: string;
    activityTitle: string;
    date: string;
    enrollNumber: string;
}


export const DynamicComponent = ({ ...data }: ListData) => {

    switch (data.componentType) {
        case ComponentTypes.MyScrollCardList:
            return <MyScrollCardList {...data} />

        case ComponentTypes.MySimpleScrollCardList:
            return <MySimpleScollCardList {...data} />
        default:
            return <></>
    }
}
