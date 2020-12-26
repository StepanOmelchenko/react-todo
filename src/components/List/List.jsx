import style from './List.module.css';
import Item from '../Item/Item';
import New from '../New/New';

const List = ({tasks, setItems, input, setInput}) => {
  function add() {
    setItems((items) => [...items, input]);
    setInput('');
  }

  function remove(id) {
    setItems((items) => items.filter((item, index) => index !== id));
  }

  return (
    <div className={style.tasks}>
      <ul className={style.list}>
        {tasks.map((task, index) => <Item key={index} task={task} id={index} remove={remove}/>)}
      </ul>
      <New add={add} input={input} setInput={setInput}/>
    </div>
  );
}

export default List;
