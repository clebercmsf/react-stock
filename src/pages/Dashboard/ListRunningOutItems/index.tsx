import ItemListContext from "../../../contexts/ItemListContext";
import useDashboard from "../../../hooks/useDashboard";
import Item from "../../../components/ResumeItem";
import { useContext } from "react";

export default function ListRunningOutItems() {
  const itemListContext = useContext(ItemListContext);
  const itemList = itemListContext;
  if (itemList === undefined) return [];

  const data = useDashboard();

  return (
    <div className="list">
      <div className="list__header running-out-header">
        <label>Itens Acabando</label>
        <label>Qtd.</label>
        <label>Ações</label>
      </div>
      <div className="list__content">
        {data.runningOutItems.length > 0 
        ? data.runningOutItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
          />
        ))
        : null}
      </div>
    </div>
  );
}