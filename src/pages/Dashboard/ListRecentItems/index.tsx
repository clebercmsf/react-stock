import ItemListContext from "../../../contexts/ItemListContext";
import useDashboard from "../../../hooks/useDashboard";
import Item from "../../../components/ResumeItem";
import { useContext } from "react";

export default function ListRecentItems() {
  const itemListContext = useContext(ItemListContext);
  const itemList = itemListContext;
  if (itemList === undefined) return [];

  const data = useDashboard();

  return (
    <div className="list">
      <div className="list__header">
        <label>Itens Recentes</label>
        <label>Ações</label>
      </div>
      <div className="list__content">
        {data.recentItems.items.length > 0 
        ? data.recentItems.items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={undefined}
          />
        ))
        : null}
      </div>
    </div>
  );
}