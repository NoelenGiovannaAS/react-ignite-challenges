import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { AddTask } from "./components/TaskList/AddTask/AddTask";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
