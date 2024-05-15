"use client"

import { create } from "zustand";

type SolSystemEarth = {
    id: number,
    name: string,
    hours: {
        hour0: {id: number, value: string, action: string, active: boolean},
        hour1: {id: number, value: string, action: string, active: boolean},
        hour2: {id: number, value: string, action: string, active: boolean},
        hour3: {id: number, value: string, action: string, active: boolean},
        hour4: {id: number, value: string, action: string, active: boolean},
        hour5: {id: number, value: string, action: string, active: boolean},
        hour6: {id: number, value: string, action: string, active: boolean},
        hour7: {id: number, value: string, action: string, active: boolean},
        hour8: {id: number, value: string, action: string, active: boolean},
        hour9: {id: number, value: string, action: string, active: boolean},
        hour10: {id: number, value: string, action: string, active: boolean},
        hour11: {id: number, value: string, action: string, active: boolean},
        hour12: {id: number, value: string, action: string, active: boolean},
        hour13: {id: number, value: string, action: string, active: boolean},
        hour14: {id: number, value: string, action: string, active: boolean},
        hour15: {id: number, value: string, action: string, active: boolean},
        hour16: {id: number, value: string, action: string, active: boolean},
        hour17: {id: number, value: string, action: string, active: boolean},
        hour18: {id: number, value: string, action: string, active: boolean},
        hour19: {id: number, value: string, action: string, active: boolean},
        hour20: {id: number, value: string, action: string, active: boolean},
        hour21: {id: number, value: string, action: string, active: boolean},
        hour22: {id: number, value: string, action: string, active: boolean},
        hour23: {id: number, value: string, action: string, active: boolean}
    },
    days: number,
    interval: number,
    running: boolean
}

type SolSystemMars = {
    id: number,
    name: string,
    hours: {
        hour0: {id: number, value: string, action: string, active: boolean},
        hour1: {id: number, value: string, action: string, active: boolean},
        hour2: {id: number, value: string, action: string, active: boolean},
        hour3: {id: number, value: string, action: string, active: boolean},
        hour4: {id: number, value: string, action: string, active: boolean},
        hour5: {id: number, value: string, action: string, active: boolean},
        hour6: {id: number, value: string, action: string, active: boolean},
        hour7: {id: number, value: string, action: string, active: boolean},
        hour8: {id: number, value: string, action: string, active: boolean},
        hour9: {id: number, value: string, action: string, active: boolean}
    },
    days: number,
    interval: number,
    running: boolean
    }

export const useTestStoreEarth = create<SolSystemEarth>(
    (set) => ({
        id: 0,
        name: "earth",
        hours: {
            hour0: {id: 0, value: "00:00", action: "", active: false},
            hour1: {id: 1, value: "01:00", action: "", active: false},
            hour2: {id: 2, value: "02:00", action: "", active: false},
            hour3: {id: 3, value: "03:00", action: "", active: false},
            hour4: {id: 4, value: "04:00", action: "", active: false},
            hour5: {id: 5, value: "05:00", action: "", active: false},
            hour6: {id: 6, value: "06:00", action: "", active: false},
            hour7: {id: 7, value: "07:00", action: "", active: false},
            hour8: {id: 8, value: "08:00", action: "", active: false},
            hour9: {id: 9, value: "09:00", action: "", active: false},
            hour10: {id: 10, value: "10:00", action: "", active: false},
            hour11: {id: 11, value: "11:00", action: "", active: false},
            hour12: {id: 12, value: "12:00", action: "", active: false},
            hour13: {id: 13, value: "13:00", action: "", active: false},
            hour14: {id: 14, value: "14:00", action: "", active: false},
            hour15: {id: 15, value: "15:00", action: "", active: false},
            hour16: {id: 16, value: "16:00", action: "", active: false},
            hour17: {id: 17, value: "17:00", action: "", active: false},
            hour18: {id: 18, value: "18:00", action: "", active: false},
            hour19: {id: 19, value: "19:00", action: "", active: false},
            hour20: {id: 20, value: "20:00", action: "", active: false},
            hour21: {id: 21, value: "21:00", action: "", active: false},
            hour22: {id: 22, value: "22:00", action: "", active: false},
            hour23: {id: 23, value: "23:00", action: "", active: false}
        },
        days: 24,
        interval: 1000,
        running: false
        }
))

export const useTestStoreMars = create<SolSystemMars>(
    (set) => ({
        id: 1,
        name: "mars",
        hours: {
            hour0: {id: 0, value: "00:00", action: "", active: false},
            hour1: {id: 1, value: "01:00", action: "", active: false},
            hour2: {id: 2, value: "02:00", action: "", active: false},
            hour3: {id: 3, value: "03:00", action: "", active: false},
            hour4: {id: 4, value: "04:00", action: "", active: false},
            hour5: {id: 5, value: "05:00", action: "", active: false},
            hour6: {id: 6, value: "06:00", action: "", active: false},
            hour7: {id: 7, value: "07:00", action: "", active: false},
            hour8: {id: 8, value: "08:00", action: "", active: false},
            hour9: {id: 9, value: "09:00", action: "", active: false}
        },
        days: 10,
        interval: 500,
        running: false
        }
))

export default useTestStoreEarth; useTestStoreMars;