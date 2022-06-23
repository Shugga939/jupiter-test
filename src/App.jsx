import Header from "./Components/Header/Header";
import Button from "./Components/UI/Button/Button";

function App() {

  return (
    <div className="PortfolioWrapper">
      <Header/>
      <main className={style.main-wrapper}>
        <section className={style.gallery}>
          <div className={style.gallery_switcher}>
            <button>Show All</button>
            <button>Design</button>
            <button>Branding</button>
            <button>Illustration</button>
            <button>Motion</button>
          </div>
          <div className={style.gallery_cards}>
      
          </div>
          <Button>Load More</Button>
        </section>
      </main>
    </div>
  );
}

export default App;
