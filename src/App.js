import Headercode from './sitioweb/Header'
import MenuNav from './sitioweb/MenuNav'
import Carrusel from './sitioweb/Carrusel';
import CartTarjeta from './sitioweb/CartTarjeta';
import Aside from './sitioweb/Aside';
import MapaUbic from './sitioweb/MapaUbic';
import Videocompu from './sitioweb/Videocompu';
import Footer from './sitioweb/Footer';

function App() {
  return (
    <div className="container">
        <header className="row bg-secondary">
          <Headercode/>
        </header>
      <nav className="row bg-primary">
        <MenuNav/>
      </nav>
      <section className="row" style={{backgroundColor: "#ccc"}}> 
        <article className="col-md-6" > 
        <Carrusel/>
        </article>
        
        <aside className="col-md-3" style={{backgroundColor:"rgb(27 127 204"}}>
          <Aside/>
        </aside>
        <article className="col-md-3 bg-secondary p-4">
          <CartTarjeta/>
        </article>
      </section>
      <section className="row bg-dark text-light">
        <article className="col-md-9 justify-content-center" style={{backgroundColor:"#a78747"}}>
          <MapaUbic/>
        </article>
        <article className="col-md-3 justify-content-center bg-secondary">
          <Videocompu/>
        </article>
      </section>
      <footer className="row bg-dark text-light justify-content-center align-item-center p-5 mb-3">
        <Footer/>
      </footer>
    </div>
  );
}
export default App;

