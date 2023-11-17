import EmptyState from "../../assets/clipboard.svg";
import { TaskListCounter } from "./TaskCounter/TaskListCounter";
import styles from "./TaskList.module.scss";

export const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <header className={styles.taskListHeader}>
        <TaskListCounter
          counterName="Tarefas criadas"
          counter="5"
          color="--blue-dark"
        />
        <TaskListCounter
          counterName="Concluídas"
          counter="2 de 5"
          color="--purple"
        />
      </header>

      <div className={styles.tasks}>
        <img src={EmptyState} />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
};
