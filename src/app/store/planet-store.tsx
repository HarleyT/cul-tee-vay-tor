import { proxy, useSnapshot } from 'valtio'

interface Store {
    running: boolean;
    planet: string;
    earth: Task[];
    earthTime: number;
    earthIndex: number;
    mars: Task[];
    marsTime: number;
    marsIndex: number,
}

type Task = {
    id: number;
    value: string;
    action: string;
}

export const planetStore = proxy<Store>({
    running: true,
    planet: "earth",
    earth: [
        {id: 1, value: "00:00", action: ""},
        {id: 2, value: "01:00", action: ""},
        {id: 3, value: "02:00", action: ""},
        {id: 4, value: "03:00", action: ""},
        {id: 5, value: "04:00", action: ""},
        {id: 7, value: "05:00", action: ""},
        {id: 6, value: "06:00", action: ""},
        {id: 8, value: "07:00", action: ""},
        {id: 9, value: "08:00", action: ""},
        {id: 10, value: "09:00", action: ""},
        {id: 11, value: "10:00", action: ""},
        {id: 12, value: "11:00", action: ""},
        {id: 13, value: "12:00", action: ""},
        {id: 14, value: "13:00", action: ""},
        {id: 15, value: "14:00", action: ""},
        {id: 16, value: "15:00", action: ""},
        {id: 17, value: "16:00", action: ""},
        {id: 18, value: "17:00", action: ""},
        {id: 19, value: "18:00", action: ""},
        {id: 20, value: "19:00", action: ""},
        {id: 21, value: "20:00", action: ""},
        {id: 22, value: "21:00", action: ""},
        {id: 23, value: "22:00", action: ""},
        {id: 24, value: "23:00", action: ""}
    ],
    earthTime: 1000,
    earthIndex: 24,
    mars: [
        {id: 1, value: "00:00", action: ""},
        {id: 2, value: "01:00", action: ""},
        {id: 3, value: "02:00", action: ""},
        {id: 4, value: "03:00", action: ""},
        {id: 5, value: "04:00", action: ""},
        {id: 7, value: "05:00", action: ""},
        {id: 6, value: "06:00", action: ""},
        {id: 8, value: "07:00", action: ""},
        {id: 9, value: "08:00", action: ""},
        {id: 10, value: "09:00", action: ""},
        {id: 11, value: "10:00", action: ""}
    ],
    marsTime: 500,
    marsIndex: 11
})