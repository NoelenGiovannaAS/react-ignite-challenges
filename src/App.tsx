import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
