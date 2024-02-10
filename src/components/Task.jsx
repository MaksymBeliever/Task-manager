import "./Task.css";
import classNames from "classnames";
import { useStore } from "../store.js";
import { TrashOutline } from "react-ionicons";

export default function Task({ title }) {
    const task = useStore((store) =>
        store.tasks.find((task) => task.title === title)
    );

    const deleteTask = useStore((store) => store.deleteTask);

    return (
        <div className="task">
            <div>{task.title}</div>
            <div className="bottomWrapper">
                <div>
                    <button onClick={() => deleteTask(task.title)}>
                        <TrashOutline
                            color="#00000"
                            title="delete"
                            height="20px"
                            width="20px"
                        />
                    </button>
                </div>
                <div className={classNames("status", task.state)}>{task.state}</div>
            </div>
        </div>
    );
}
