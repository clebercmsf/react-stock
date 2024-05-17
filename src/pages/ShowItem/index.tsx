import { useContext } from "react";
import "./styles.scss";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ItemListContext, { ItemType } from "../../contexts/ItemListContext";

export default function ShowItem () {
  const itemListContext = useContext(ItemListContext);
  const item = useLoaderData() as ItemType;
  const navigate = useNavigate();

  const deleteBtn = () => {
    itemListContext?.removeItem(item.id);
    navigate("/itens");
  }

  return (
    <main className="section__show-items">
      <div className="show-items__header">
        <span>{item.name}</span>
        <div>
          <Link to={`/itens/att/${item.id}`}><button className="updateBtn">Atualizar</button></Link>
          <button className="deleteBtn" onClick={deleteBtn}>Excluir</button>
        </div>
      </div>
      <div className="show-items__content">
        <div className="content-informations">
          <div>
            <label>{`Categoria: ${item.category}`}</label>
          </div>
          <div>
            <label>{`Quantidade em estoque: ${item.quantity}`}</label>
          </div>
          <div>
            <label>{`Preço: R$${item.price}`}</label>
          </div>
        </div>
        <p>{item.description}</p>
        <div className="content-dates">
          <span>Cadastrado em: {item.creationDate}</span>
          <span>Atualizado em: {item.lastUpdateDate}</span>
        </div>
      </div>
    </main>
  );
}