"use client"

import { create } from "zustand"
import { produce } from "immer"

export interface Task {
    id: number;
    value: string;
    action: string;
}

type PlanetStore = {
    planet: string;
    selectEarth: () => void;
    selectMars: () => void;
    earth: Task[];
    earthTime: number;
    earthIndex: number;
    mars: Task[];
    marsTime: number;
    marsIndex: number,
    running: boolean;
    selectEarthAction: (id: number, action: string) => void;
    selectMarsAction: (id: number, action: string) => void;
}

export const usePlanetStore = create<PlanetStore>(
    (set) => ({
    planet: "earth",
    selectEarth: () => {
        set((state) => ({ planet: "earth", running: false}))
    },
    selectMars: () => {
        set((state) => ({ planet: "mars", running: false}))
    },
    earth: [
        {id: 1, value: "00:00", action: "null"},
        {id: 2, value: "01:00", action: "null"},
        {id: 3, value: "02:00", action: "null"},
        {id: 4, value: "03:00", action: "null"},
        {id: 5, value: "04:00", action: "null"},
        {id: 7, value: "05:00", action: "null"},
        {id: 6, value: "06:00", action: "null"},
        {id: 8, value: "07:00", action: "null"},
        {id: 9, value: "08:00", action: "null"},
        {id: 10, value: "09:00", action: "null"},
        {id: 11, value: "10:00", action: "null"},
        {id: 12, value: "11:00", action: "null"},
        {id: 13, value: "12:00", action: "null"},
        {id: 14, value: "13:00", action: "null"},
        {id: 15, value: "14:00", action: "null"},
        {id: 16, value: "15:00", action: "null"},
        {id: 17, value: "16:00", action: "null"},
        {id: 18, value: "17:00", action: "null"},
        {id: 19, value: "18:00", action: "null"},
        {id: 20, value: "19:00", action: "null"},
        {id: 21, value: "20:00", action: "null"},
        {id: 22, value: "21:00", action: "null"},
        {id: 23, value: "22:00", action: "null"},
        {id: 24, value: "23:00", action: "null"}
    ],
    earthTime: 1000,
    earthIndex: 24,
    mars: [
        {id: 1, value: "00:00", action: "null"},
        {id: 2, value: "01:00", action: "null"},
        {id: 3, value: "02:00", action: "null"},
        {id: 4, value: "03:00", action: "null"},
        {id: 5, value: "04:00", action: "null"},
        {id: 7, value: "05:00", action: "null"},
        {id: 6, value: "06:00", action: "null"},
        {id: 8, value: "07:00", action: "null"},
        {id: 9, value: "08:00", action: "null"},
        {id: 10, value: "09:00", action: "null"},
        {id: 11, value: "10:00", action: "null"}
    ],
    marsTime: 500,
    marsIndex: 11,
    running: true,
    selectEarthAction: (id, item) => {
        set(
            produce((state: PlanetStore) => {
                state.earth[id].action = item
            })
        )
    },
    selectMarsAction: (id, item) => {
        set(
            produce((state: PlanetStore) => {
                state.mars[id].action = item
            })
        )
    },
}))

export interface Action {
    id: number;
    value: string;
}

type ActionStore = {
    actionList: Action[];
}

export const useActionStore = create<ActionStore>(
    (set) => ({
    actionList: [
        { id: 1, value: "Tr. Energy"},
        { id: 2, value: "Tr. Physical"},
        { id: 3, value: "Meditate"},
        { id: 4, value: "Rest"},
        { id: 5, value: "Explore"}
    ]
    }))

export default usePlanetStore; useActionStore;