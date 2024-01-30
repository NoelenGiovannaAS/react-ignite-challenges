import { Trash } from "phosphor-react";
import Check from "../../../../assets/check.svg";
import { ITask } from "../../TaskList.type";
import styles from "./Task.module.scss";

interface TaskProps {
  task: ITask;
  onDeleteTask: (id: string) => void;
  onCheckTask: ({ id, value }: { id: string; value: boolean }) => void;
}
export const Task = ({ task, onDeleteTask, onCheckTask }: TaskProps) => {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCheckTask() {
    onCheckTask({ id: task.id, value: !task.isChecked });
  }

  return (
    <div className={styles.task}>
      <label
        htmlFor="checkbox"
        onClick={handleCheckTask}
        className={styles.taskContentAndCheck}
      >
        <input
          readOnly
          className={styles.checkboxTaskInput}
          type="checkbox"
          checked={task.isChecked}
        />
        {task.isChecked ? (
          <img className={styles.checkboxTaskCircle} src={Check} />
        ) : (
          <span className={styles.checkboxUncheckTaskCircle} />
        )}
        <p className={task.isChecked ? styles.checkedTaskText : ""}>
          {task.task}
        </p>
      </label>

      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
};
