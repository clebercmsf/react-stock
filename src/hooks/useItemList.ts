import { useState } from "react";
import { ItemType } from "../contexts/ItemListContext";

export default function useItemList () {
  const [itemList, setItemList] = useState<ItemType[]>(() => {
    const storedItems = localStorage.getItem("ccmsf-item-list");
    if (!storedItems) return [];
    return JSON.parse(storedItems);
  });

  const addItem = ({ id, name, quantity, price, category, description, creationDate, lastUpdateDate }: ItemType) => {
    const item: ItemType = { id, name, quantity, price, category, description, creationDate, lastUpdateDate };
    setItemList(state => {
      const newState = [item, ...state];
      localStorage.setItem("ccmsf-item-list", JSON.stringify(newState));
      return newState;
    });
  }

  const removeItem = (id: number) => {
    setItemList(state => {
      const newState = state.filter(item => item.id !== id);
      localStorage.setItem("ccmsf-item-list", JSON.stringify(newState));
      return newState;
    });
  }

  const updateItem = ({ id, name, quantity, price, category, description, creationDate }: ItemType) => {
    const currentDate = new Date();
    const lastUpdateDate = currentDate.toLocaleString();

    removeItem(id);
    addItem({id, name, quantity, price, category, description, creationDate, lastUpdateDate});
  }

  return { itemList, addItem, removeItem, updateItem };
}