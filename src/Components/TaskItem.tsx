import { useTaskStore } from "../Store/UseTaskStore";

type TaskProps = {
    task: {
        id: number;
        text: string;
        completed: boolean;
    };
};

export function TaskItem({ task }: TaskProps) {
    const { toggleTask } = useTaskStore();

    return (
        <div style={{ marginBottom: "10px" }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span style={{ marginLeft: "10px" }}>{task.text}</span>
        </div>
    );
}
