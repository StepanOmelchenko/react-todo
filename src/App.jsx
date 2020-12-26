import style from './App.module.css';
import List from './components/List/List';
import {useState} from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState(['Купить молоко', 'Подобрать чек', 'Обналичить чек',]);

  return (
    <div className={style.app}>
      <List tasks={items} setItems={setItems} input={input} setInput={setInput}/>
    </div>
  );
}

export default App;
