import { Box, Center, Divider, ScrollView, VStack, Text, Pressable } from 'native-base'
import React, { Fragment } from 'react'
import CenterComponent from '../../components/CenterComponent'
import { Profile } from './Profile'
import { ListButton } from '../../components/button/LIstButton'

const MyDivider = () => {
    return <Divider mt={8} mb={4} />
}

const layoutData = [
    {
        header: "資料",
        items: ["收藏清單", "報名記錄", "社職履歷"],
        showRightIcon: true
    },
    {
        header: "偏好",
        items: ["語言", "私隱和安全"],
        showRightIcon: true
    },
    {
        header: "支援",
        items: ["關於我們", "聯絡我們", "應用程式資料"],
        showRightIcon: false
    },
    {
        header: "法律",
        items: ["個人資料，收集姓名", "服務條款", "私隱政策"],
        showRightIcon: false
    },


]




const SettingScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} mx={4}>
            <VStack mt={2} space={8}>
                <Profile />
            </VStack>
            <Divider mt={8} mb={4} />

            {
                layoutData.map((value, index) =>
                    <Fragment key={index}>
                        <VStack space={4}>
                            <Text bold fontSize={'lg'}>{value.header}</Text>
                            {
                                value.items.map((item, index) =>
                                    <ListButton key={index} showRightIcon={value.showRightIcon} title={item} showSubTitle={false} />
                                )
                            }
                        </VStack>
                        {
                            layoutData.length - 1 !== index && <Divider mt={8} mb={4} />
                        }

                    </Fragment>
                )
            }

            <Pressable mt={4} mb={10}>
                <Text underline color={'orange.500'}>登出</Text>
            </Pressable>

        </ScrollView>
    )
}

export default SettingScreen