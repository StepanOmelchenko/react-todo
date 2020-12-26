import style from './New.module.css';

const New = ({add, input, setInput}) => {
  return (
    <div className={style.new}>
      <input
        className={style.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>+</button>
    </div>
  );
}

export default New;