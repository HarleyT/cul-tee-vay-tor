"use client"

import { create } from "zustand"

export interface Task {
    id: number;
    value: string;
    inUse: boolean;
}

type TaskStore = {
    tasks: Task[];
    toggle: (id: number, inUse: boolean) => void;
}

const toggleTask = (tasks: Task[], id: number): Task[] =>
    tasks.map((task) => ({
    ... task,
    inUse: task.id === id ? !task.inUse : task.inUse,
}));

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [
        {id: 1, value: "01:00", inUse: false},
        {id: 2, value: "02:00", inUse: false},
        {id: 3, value: "03:00", inUse: false},
        {id: 4, value: "04:00", inUse: false},
        {id: 5, value: "05:00", inUse: false},
        {id: 7, value: "06:00", inUse: false},
        {id: 6, value: "07:00", inUse: false},
        {id: 8, value: "08:00", inUse: false},
        {id: 9, value: "09:00", inUse: false},
        {id: 10, value: "10:00", inUse: false},
        {id: 11, value: "11:00", inUse: false},
        {id: 12, value: "12:00", inUse: false},
        {id: 13, value: "13:00", inUse: false},
        {id: 14, value: "14:00", inUse: false},
        {id: 15, value: "15:00", inUse: false},
        {id: 16, value: "16:00", inUse: false},
        {id: 17, value: "17:00", inUse: false},
        {id: 18, value: "18:00", inUse: false},
        {id: 19, value: "19:00", inUse: false},
        {id: 20, value: "20:00", inUse: false},
        {id: 21, value: "21:00", inUse: false},
        {id: 22, value: "22:00", inUse: false},
        {id: 23, value: "23:00", inUse: false},
        {id: 24, value: "24:00", inUse: false}
    ],
    toggle(id: number, inUse: boolean) {
        set((state) => ({
            ... state,
            tasks: toggleTask(state.tasks, id),
        }))
    }
}))

//   const inputlabel = times.value.map(timelab => {
//     return <div key={timelab.id}>{timelab.value}</div>;
//     })

export default useTaskStore