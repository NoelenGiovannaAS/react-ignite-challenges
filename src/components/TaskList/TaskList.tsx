import { useEffect, useState } from "react";
import styles from "./TaskList.module.scss";
import { ITask } from "./TaskList.type";
import { AddTaskInput, EmptyState, Task, TaskCounter } from "./sub-components";

export const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>(getTask);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  function getTask() {
    const taskList = localStorage.getItem("taskList");
    return taskList ? JSON.parse(taskList) : [];
  }

  function handleDeleteTask(taskToDelete: string) {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(newTasks);
  }

  function handleCheckTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: value,
        };
      }
      return {
        ...task,
      };
    });
    setTasks(updatedTasks);
  }

  function getConcludedTotalTasks() {
    return tasks.filter((task) => task.isChecked).length;
    /*return tasks.reduce((acc, task) => {
      if (task.isChecked) {
        return acc + 1;
      }
      return acc;
    }, 0);*/
  }

  return (
    <div className={styles.wrapper}>
      <AddTaskInput tasks={tasks} setTasks={setTasks} />
      <div className={styles.taskList}>
        <header className={styles.taskListHeader}>
          <TaskCounter
            counterName="Tarefas criadas"
            counter={tasks.length}
            color="--blue-dark"
          />
          <TaskCounter
            counterName="Concluídas"
            counter={`${getConcludedTotalTasks()} de ${tasks.length}`}
            color="--purple"
          />
        </header>

        <div className={styles.taskListContent}>
          {!tasks.length ? (
            <EmptyState />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask}
                onCheckTask={handleCheckTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
