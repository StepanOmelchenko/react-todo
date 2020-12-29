import style from './New.module.css';
import {useState} from 'react';

const New = ({add}) => {
  const [value, setInput] = useState('');

  function addNew(value) {
    add(value);
    setInput('');
  }

  return (
    <div className={style.new}>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={style.button} onClick={(e) => addNew(value)}/>
    </div>
  );
}

export default New;
