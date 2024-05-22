"use client"

import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { produce } from "immer"

export interface Task {
    id: number;
    value: string;
    action: string;
}

export type PlanetState = {
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
    selectEarthAction: (id: number, item: string) => any;
    selectMarsAction: (id: number, item: string) => any;
}

export const usePlanetStore = create<PlanetState>()(
    devtools(
        persist(
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
                {id: 0, value: "00:00", action: ""},
                {id: 1, value: "01:00", action: ""},
                {id: 2, value: "02:00", action: ""},
                {id: 3, value: "03:00", action: ""},
                {id: 4, value: "04:00", action: ""},
                {id: 5, value: "05:00", action: ""},
                {id: 6, value: "06:00", action: ""},
                {id: 7, value: "07:00", action: ""},
                {id: 8, value: "08:00", action: ""},
                {id: 9, value: "09:00", action: ""},
                {id: 10, value: "10:00", action: ""},
                {id: 11, value: "11:00", action: ""}
            ],
            marsTime: 500,
            marsIndex: 11,
            running: true,
            selectEarthAction: (hourID: number, item: string) => {
                set(
                    produce((state) => {
                        state.earth.hour0.action = item
                    })
                )
            },
            selectMarsAction: (id: number, item: string) => {
                set(
                    produce((state) => {
                        state.mars[id].action = item
                    })
                )
            }
        }),
            { name: 'planetStore'},
        ),
    ),
)

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

// selectEarthAction: (id: number, item: string) => {
//     set(
//         produce((state) => {
//             state.earth[id].action = item
//         })
//     )
// },

// {id: 1, value: "00:00", action: "null"},
// {id: 2, value: "01:00", action: "null"},
// {id: 3, value: "02:00", action: "null"},
// {id: 4, value: "03:00", action: "null"},
// {id: 5, value: "04:00", action: "null"},
// {id: 7, value: "05:00", action: "null"},
// {id: 6, value: "06:00", action: "null"},
// {id: 8, value: "07:00", action: "null"},
// {id: 9, value: "08:00", action: "null"},
// {id: 10, value: "09:00", action: "null"},
// {id: 11, value: "10:00", action: "null"},
// {id: 12, value: "11:00", action: "null"},
// {id: 13, value: "12:00", action: "null"},
// {id: 14, value: "13:00", action: "null"},
// {id: 15, value: "14:00", action: "null"},
// {id: 16, value: "15:00", action: "null"},
// {id: 17, value: "16:00", action: "null"},
// {id: 18, value: "17:00", action: "null"},
// {id: 19, value: "18:00", action: "null"},
// {id: 20, value: "19:00", action: "null"},
// {id: 21, value: "20:00", action: "null"},
// {id: 22, value: "21:00", action: "null"},
// {id: 23, value: "22:00", action: "null"},
// {id: 24, value: "23:00", action: "null"}

// hour0: {id: 0, value: "00:00", action: ""},
// hour1: {id: 1, value: "01:00", action: ""},
// hour2: {id: 2, value: "02:00", action: ""},
// hour3: {id: 3, value: "03:00", action: ""},
// hour4: {id: 4, value: "04:00", action: ""},
// hour5: {id: 5, value: "05:00", action: ""},
// hour6: {id: 6, value: "06:00", action: ""},
// hour7: {id: 7, value: "07:00", action: ""},
// hour8: {id: 8, value: "08:00", action: ""},
// hour9: {id: 9, value: "09:00", action: ""},
// hour10: {id: 10, value: "10:00", action: ""},
// hour11: {id: 11, value: "11:00", action: ""},
// hour12: {id: 12, value: "12:00", action: ""},
// hour13: {id: 13, value: "13:00", action: ""},
// hour14: {id: 14, value: "14:00", action: ""},
// hour15: {id: 15, value: "15:00", action: ""},
// hour16: {id: 16, value: "16:00", action: ""},
// hour17: {id: 17, value: "17:00", action: ""},
// hour18: {id: 18, value: "18:00", action: ""},
// hour19: {id: 19, value: "19:00", action: ""},
// hour20: {id: 20, value: "20:00", action: ""},
// hour21: {id: 21, value: "21:00", action: ""},
// hour22: {id: 22, value: "22:00", action: ""},
// hour23: {id: 23, value: "23:00", action: ""}