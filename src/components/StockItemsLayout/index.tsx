import "./styles.scss";
import { Link, Outlet } from "react-router-dom";

export default function StockItemsLayout () {
  return (
    <main>
      <h1>Stock Items</h1>
      <div className="nav-item">
        <div>
          <Link to={"/itens"}>Todos os Itens</Link>
          <Link to={"/itens/novo"}>Novo Item</Link>
        </div>
        <hr />
      </div>
      <div className="stock-content">
        <Outlet />
      </div>
    </main>
  );
}