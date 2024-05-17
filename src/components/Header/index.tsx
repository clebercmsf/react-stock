import { Link } from "react-router-dom";
import "./styles.scss";

export default function Header () {
  return (
    <header>
      <label>REACT STOCK</label>
      <nav>
        <Link to={"/"}>Início</Link>
        <Link to={"/itens"}>Itens</Link>
      </nav>
    </header>
  );
}