import EmptyStateImage from "../../../../assets/empty_state.svg";
import styles from "./EmptyState.module.scss";

export const EmptyState = () => {
  return (
    <div className={styles.emptyTasks}>
      <img src={EmptyStateImage} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
};
