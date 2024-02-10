import { create } from "zustand";

const store = (set) => ({
    tasks: [
        {
            title: 'test task',
            state: 'PLANNED'
        }
    ],
    addTask: (title, state) =>
        set((store) => ({ tasks: [...store.tasks, { title, state }] })),
});

export const useStore = create(store);
