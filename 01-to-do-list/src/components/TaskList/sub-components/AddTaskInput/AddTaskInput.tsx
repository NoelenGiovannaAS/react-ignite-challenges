import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { ITask } from "../../TaskList.type";
import styles from "./AddTaskInput.module.scss";

interface AddTaskInputProps {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
}

export const AddTaskInput = ({ tasks, setTasks }: AddTaskInputProps) => {
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewInvalidTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Campo obrigatório!");
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), task: newTask, isChecked: false },
    ]);
    setNewTask("");
  }
  return (
    <div className={styles.addTaskForm}>
      <form onSubmit={handleCreateNewTask} className={styles.addTask}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewInvalidTask}
          required
        />
        <button disabled={!newTask.length}>
          Criar <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </div>
  );
};
