import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.scss";

export const AddTask = () => {
  return (
    <div className={styles.addTask}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </div>
  );
};
