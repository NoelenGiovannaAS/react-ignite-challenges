import styles from "./TaskCounter.module.scss";

interface Props {
  counterName: string;
  counter: string | number;
  color: string;
}

export const TaskCounter = ({ counterName, counter, color }: Props) => {
  return (
    <strong className={styles.counterText} style={{ color: `var(${color})` }}>
      {counterName}
      <span className={styles.counterInfo}>{counter}</span>
    </strong>
  );
};
