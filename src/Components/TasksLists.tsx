import { useState } from "react";
import { useTaskStore } from "../Store/UseTaskStore";
import styles from "../css/TaskList.module.css";

export function TaskList() {
    const { tasks, addTask, removeTask } = useTaskStore();
    const [newTaskText, setNewTaskText] = useState("");

    function handleAddTask() {
        if (newTaskText.trim() === "") return;
        const newTask = {
            id: tasks.length + 1,
            task: newTaskText,
            text: newTaskText,
            completed: false,
        };
        addTask(newTask);
        setNewTaskText("");
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Lista de Tarefas</h2>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                />
                <button className={styles.button} onClick={handleAddTask}>
                    Add
                </button>
            </div>
            <div className={styles.taskList}>
                <div>
                    {tasks.map((task) => (
                        <div key={task.id} className={styles.task}>
                            <span>{task.text}</span>
                            <button
                                className={styles.deleteButton}
                                onClick={() => removeTask(task.id)}
                            >
                                Remover
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
