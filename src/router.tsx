import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./pages/Dashboard";
import StockItemsLayout from "./components/StockItemsLayout";
import Items from "./pages/allItems";
import NewItem from "./pages/NewItem";
import UpdateItem from "./pages/UpdateItem";
import ShowItem from "./pages/ShowItem";
import itemLoader from "./loaders/itemLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/itens",
        element: <StockItemsLayout />,
        children: [
          {
            index: true,
            element: <Items />
          },
          {
            path: "/itens/novo",
            element: <NewItem />
          },
          {
            path: "/itens/:itemId",
            element: <ShowItem />,
            loader: itemLoader
          },
          {
            path: "/itens/att/:itemId",
            element: <UpdateItem />,
            loader: itemLoader
          }
        ]
      }
    ]
  }
]);

export default router;