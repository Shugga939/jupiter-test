import style from 'DropdownList.scss'

function Card({}) {

  return (
    <div className={style.dd}>
      <div className={style.dd-header}>
        <div className={style.dd-header-title}></div>
      </div>
      <div className={style.dd-list}>
        <button className></button>
        <button className></button>
        <button className></button>
      </div>
    </div>
  );
}

export default Card;