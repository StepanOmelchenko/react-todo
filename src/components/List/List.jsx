import style from './List.module.css';
import Item from '../Item/Item';
import New from '../New/New';
import {useState} from 'react';

const List = () => {
  const [tasks, setItems] = useState(['Купить молоко', 'Подобрать чек', 'Обналичить чек',]);

  function add(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function remove(id) {
    setItems((items) => items.filter((item, index) => index !== id));
  }

  return (
    <div className={style.tasks}>
      <ul className={style.list}>
        {tasks.map((task, index) => <Item key={index} task={task} id={index} remove={remove}/>)}
      </ul>
      <New add={add}/>
    </div>
  );
}

export default List;
