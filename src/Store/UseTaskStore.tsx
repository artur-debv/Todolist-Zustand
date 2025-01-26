import { create } from "zustand";
import { ReactNode } from "react";

type Task = {
    text: ReactNode;
    id: number;
    task: string;
    completed: boolean;
};

type TasksState = {
    tasks: Task[];
    addTask: (task: Task) => void;
    toggleTask: (taskId: number) => void;
    removeTask: (taskId: number) => void; // Nova função para remover tarefas
};

export const useTaskStore = create<TasksState>((set) => ({
    tasks: [],
    addTask: (task) =>
        set((state) => ({
            tasks: [...state.tasks, task], // Adiciona a nova tarefa ao array existente
        })),
    toggleTask: (taskId) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
        })),
    removeTask: (taskId) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== taskId)
        })),
}));
