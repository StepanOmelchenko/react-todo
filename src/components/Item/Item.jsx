import style from './Item.module.css';

const Item = ({task, id, remove}) => {
  return (
    <li className={style.item}>
      <div className={style.task}>
        <div className={style.text}>{task}</div>
        <div onClick={() => remove(id)} className={style.remove}/>
      </div>
    </li>
  );
}

export default Item;
