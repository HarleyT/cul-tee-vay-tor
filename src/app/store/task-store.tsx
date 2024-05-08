"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export interface Task {
    id: number;
    value: string;
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
}

export const usePlanetStore = create<PlanetStore>(
        (set) => ({
    planet: "earth",
    selectEarth: () => {
        set((state) => ({ planet: "earth"}))
    },
    selectMars: () => {
        set((state) => ({ planet: "mars"}))
    },
    earth: [
        {id: 1, value: "00:00"},
        {id: 2, value: "01:00"},
        {id: 3, value: "02:00"},
        {id: 4, value: "03:00"},
        {id: 5, value: "04:00"},
        {id: 7, value: "05:00"},
        {id: 6, value: "06:00"},
        {id: 8, value: "07:00"},
        {id: 9, value: "08:00"},
        {id: 10, value: "09:00"},
        {id: 11, value: "10:00"},
        {id: 12, value: "11:00"},
        {id: 13, value: "12:00"},
        {id: 14, value: "13:00"},
        {id: 15, value: "14:00"},
        {id: 16, value: "15:00"},
        {id: 17, value: "16:00"},
        {id: 18, value: "17:00"},
        {id: 19, value: "18:00"},
        {id: 20, value: "19:00"},
        {id: 21, value: "20:00"},
        {id: 22, value: "21:00"},
        {id: 23, value: "22:00"},
        {id: 24, value: "23:00"}
    ],
    earthTime: 1000,
    earthIndex: 24,
    mars: [
        {id: 1, value: "00:00"},
        {id: 2, value: "01:00"},
        {id: 3, value: "02:00"},
        {id: 4, value: "03:00"},
        {id: 5, value: "04:00"},
        {id: 7, value: "05:00"},
        {id: 6, value: "06:00"},
        {id: 8, value: "07:00"},
        {id: 9, value: "08:00"},
        {id: 10, value: "09:00"},
        {id: 11, value: "10:00"}
    ],
    marsTime: 500,
    marsIndex: 11,
    running: true,
}))

type ActionStore = {
    action: string;
    actionList: Task[];
    selectAction: () => void;
}

export const useActionStore = create<ActionStore>(
    (set) => ({
    action: "Inactive",
    actionList: [
        { id: 1, value: "Tr. Energy"},
        { id: 2, value: "Tr. Physical"},
        { id: 3, value: "Meditate"},
        { id: 4, value: "Rest"},
        { id: 5, value: "Explore"}
    ],
    selectAction: () => {
        set((state) => ({}))
    },
    }))

export default usePlanetStore; useActionStore;