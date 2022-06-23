import style from 'Card.scss'

function Card({buttonText, cb, text}) {

  return (
    <div className={style.card}>
      <button 
        className={style.card_button}
        onClick={cb}
      >
        {buttonText}
      </button>
      <p> {text} </p>
    </div>
  );
}

export default Card;