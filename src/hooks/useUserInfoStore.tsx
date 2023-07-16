import React from 'react'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
interface State {
    token: string | undefined
    setToken: (value: string) => void


    data: object,
    setData: (obj: object) => void
}

export const useUserInfoStore = create<State>()(
    // persist(

    (set) => ({
        token: '',
        setToken: (value: string) => set({ token: value }),

        data: {},
        setData: (obj: object) => set({ data: obj })
    }),
    // {
    //     name: 'myTitle', // name of the item in the storage (must be unique)
    // }
)
// ) 