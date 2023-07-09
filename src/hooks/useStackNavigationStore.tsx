import React from 'react'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
interface State {
    title: string
    setTitle: (value: string) => void


    data: object,
    setData: (obj: object) => void
}

export const useStackNavigationStore = create<State>()(
    // persist(

    (set) => ({
        title: "",
        setTitle: (value: string) => set({ title: value }),

        data: {},
        setData: (obj: object) => set({ data: obj })
    }),
    // {
    //     name: 'myTitle', // name of the item in the storage (must be unique)
    // }
)
// ) 