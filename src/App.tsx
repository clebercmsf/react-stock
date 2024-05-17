import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./sass/index.scss";
import ItemListContext from "./contexts/ItemListContext";
import useItemList from "./hooks/useItemList";
import useDashboard from "./hooks/useDashboard";

export default function App () {
  const { itemList, addItem, removeItem, updateItem } = useItemList();
  const { differentItems, totalItems, recentItems, runningOutItems } = useDashboard();
  
  return (
    <ItemListContext.Provider value={{ itemList, addItem, removeItem, updateItem, differentItems, totalItems, recentItems, runningOutItems }}>
      <RouterProvider router={router} />
    </ItemListContext.Provider>
  );
}