import { Params } from "react-router-dom";

export default function itemLoader ({ params }: { params: Params<"itemId"> }) {
  const storedItems = localStorage.getItem("ccmsf-item-list");
  if (!storedItems) throw new Response("404 Not Found", { status: 404 });
  const items = JSON.parse(storedItems)

  if (!params.itemId) throw new Response("404 Not Found", { status: 404 });
    
  const paramId = +params.itemId;
  const item = items.find((item: { id: number; }) => item.id === paramId);

  if (!item) throw new Response("404 Not Found", { status: 404 });

  return item;
}