import style from 'Header.scss'
import Button from '../UI/Button/Button';

function Header() {

  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.navigation-section}>
          <div className={style.logo-section}>
            <img src="" alt="Logo" />
            <span className="name"> Agency </span>
          </div>
          <nav className={style.links}>
            <ul className={style.links_list}>
              <li>About</li>
              <li>Servies</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </nav>
          <Button> Contact </Button>
        </div>
        <div className={style.description}>
          <div className={style.description_wrapper}>
            <h1> Portfolio</h1>
            <p>Agency provides a full service range including technical skills, design, business understanding.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;