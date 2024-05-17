import { createContext } from "react";

export type ItemType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  category: string;
  description: string;
  creationDate: string;
  lastUpdateDate: string;
}

type ItemListContextType = {
  itemList: ItemType[];
  addItem: ({ name, quantity, price, category, description, creationDate, lastUpdateDate }: ItemType) => void;
  removeItem: (id: number) => void;
  updateItem: ({ name, quantity, price, category, description, creationDate, lastUpdateDate }: ItemType) => void;
  differentItems: number;
  totalItems: number;
  recentItems: { items: ItemType[]; sumItems: number; };
  runningOutItems: ItemType[];
}

const ItemListContext = createContext<ItemListContextType | undefined>(undefined);

export default ItemListContext;