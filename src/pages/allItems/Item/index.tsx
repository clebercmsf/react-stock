import { Link } from "react-router-dom";

type ItemProps = {
  id: number;
  name: string;
  quantity: number;
  category: string;
  removeItem: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Item ({ id, name, quantity, category, removeItem }: ItemProps) {
  return (
    <div className="item">
      <span>{id}</span>
      <span>{name}</span>
      <span>{quantity} unid.</span>
      <span>{category}</span>
      <div>
        <Link to={`/itens/${id}`}><button className="showBtn">Ver</button></Link>
        <Link to={`/itens/att/${id}`}><button className="updateBtn">Atualizar</button></Link>
        <button className="deleteBtn" onClick={removeItem}>Excluir</button>
      </div>
    </div>
  );
}