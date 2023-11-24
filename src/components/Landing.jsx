import "./Landing.css";
import { IoIosArrowForward } from "react-icons/io";
import nba from "../assets/nba.png";

export function Landing() {
  return (
    <div className="carousel-container">
      <div className="carousel1">
        <div className="imagen">
          <img src={nba} alt="" />
        </div>        
        <div className="card">
          <span className="title">Black Friday</span>
          <h2>Ahorra hasta un 50% en una selección de juegos digitales</h2>
          <p>
            Descubre un mundo de aventuras con ahorros increíbles en una
            selección de juegos para Xbox y PC. Las ofertas finalizan el 30 de
            noviembre.
          </p>
          <div className="actions">
            <button>Comprar juegos digitales para Xbox</button>
            <div className="link">
              <a href="">Comprar juegos digitales para PC</a>
              <p className="arrow">
                {" "}
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
