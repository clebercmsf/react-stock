import { useState } from "react";
import { ItemType } from "../contexts/ItemListContext";
import { addDays, isAfter } from 'date-fns';

export default function useDashboard () {
  const [itemList] = useState<ItemType[]>(() => {
    const storedItems = localStorage.getItem("ccmsf-item-list");
    if (!storedItems) return [];
    return JSON.parse(storedItems);
  });

  const [differentItems] = useState(() => {
    return itemList.length;
  });

  const [totalItems] = useState(() => {
    let sumItems: number = 0;
    itemList.forEach(item => {
      sumItems += item.quantity;
    });
    return sumItems;
  });

  const [recentItems] = useState(() => {
    const currentDate = new Date();
    const items = itemList.filter(item => {
      const creationDate = new Date(item.creationDate);
      return !isAfter(currentDate, addDays(creationDate, 10))
    });
    let sumItems: number = 0;
    items.forEach(item => {
      sumItems += item.quantity;
    });
    return { items, sumItems};
  });

  const [runningOutItems] = useState(() => {
    const items = itemList.filter(item => item.quantity < 10);
    return items;
  });

  return  {differentItems, totalItems, recentItems, runningOutItems} ;
}