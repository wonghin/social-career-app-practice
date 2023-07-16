import React, { useEffect, useState } from 'react'
import CenterComponent from '../../components/CenterComponent'
import { Box, Button, HStack, Icon, Input, Pressable, ScrollView } from 'native-base'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Navigation, NavigationScreenProps, RootStackParamList } from '../../navigations/NavigationParamType'
import { StackScreenProps } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form'
import { windowWidth } from '../../styles/styles';


const SearchInput = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });
    const [isOpen, setIsOpen] = useState(false)

    const handlerResetAll = () => {
        setIsOpen(false)
        reset()
    }

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            setIsOpen(false)
            reset()
        }
    }, [isFocused])

    return (
        <HStack alignItems={'center'} space={4} mx={4}>
            {
                isOpen &&
                <Pressable onPress={handlerResetAll}>
                    <Icon as={<Feather name="chevron-left" />} size={'md'} color={'black'} />
                </Pressable>
            }
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        onFocus={() => setIsOpen(true)}
                        leftElement={<Icon as={<Feather name="search" color="black" />} color={'orange.300'} size={'lg'} ml={2} />}
                        borderRadius={'full'}
                        backgroundColor={'gray.200'}
                        borderColor={'transparent'}
                        placeholder="搜尋關鍵字"
                        _focus={{ borderColor: 'orange.200', backgroundColor: 'transparent' }}
                        mr={isOpen ? 8 : 0}
                        size="xl"
                    />

                )}
                name="firstName"
            />

        </HStack>
    )
}


const SearchScreen = ({ navigation }: Navigation): JSX.Element => {
    return (
        <ScrollView
            stickyHeaderHiddenOnScroll
            contentContainerStyle={{}}
        // keyboardShouldPersistTaps="always"

        >
            <Box safeAreaTop>
                <SearchInput />

            </Box>


        </ScrollView>
    )
}

export default SearchScreen