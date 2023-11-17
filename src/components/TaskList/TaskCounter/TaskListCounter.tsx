import styles from "./TaskListCounter.module.scss";

interface Props {
  counterName: string;
  counter: string;
  color: string;
}

export const TaskListCounter = ({ counterName, counter, color }: Props) => {
  return (
    <strong className={styles.counterText} style={{ color: `var(${color})` }}>
      {counterName}
      <span className={styles.counterInfo}>{counter}</span>
    </strong>
  );
};
