import style from './App.module.css';
import List from './components/List/List';

const App = () => {
  return (
    <div className={style.app}>
      <List/>
    </div>
  );
}

export default App;
