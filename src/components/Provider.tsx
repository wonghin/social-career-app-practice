import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { customeTheme } from '../theme/customeTheme'

interface ProviderProps {
    children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient} >
            <NavigationContainer>
                <NativeBaseProvider theme={customeTheme}>
                    {children}
                </NativeBaseProvider>
            </NavigationContainer>
        </QueryClientProvider>
    )
}

export default Provider