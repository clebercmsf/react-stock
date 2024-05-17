import Item from "./Item";
import "./styles.scss";
import { useContext } from "react";
import ItemListContext from "../../contexts/ItemListContext";

export default function allItems () {
  const itemListContext = useContext(ItemListContext);
  const itemList = itemListContext;
  if (itemList === undefined) return [];

  return (
    <div className="all-items">
      <div className="all-items__header">
        <label>ID</label>
        <label>Nome</label>
        <label>Em Estoque</label>
        <label>Categoria</label>
        <label>Ações</label>
      </div>
      <div className="all-items__content">
        {itemList.itemList.length > 0 
        ? itemList.itemList.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            removeItem={() => itemList.removeItem(item.id)}
          />
        ))
        : <h2>Nenhum item cadastrado...</h2>}
      </div>
    </div>
  );
}