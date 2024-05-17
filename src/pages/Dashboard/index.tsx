import "./styles.scss";
import Card from "../../components/Card";
import { useState } from "react";
import useDashboard from "../../hooks/useDashboard";
import ListRecentItems from "./ListRecentItems";
import ListRunningOutItems from "./ListRunningOutItems";

export default function Dashboard () {
  const data = useDashboard();

  const [differentItems] = useState(data.differentItems);
  const [totalItems] = useState(data.totalItems);
  const [recentItems] = useState(data.recentItems.sumItems);
  const [runningOutItems] = useState(data.runningOutItems.length);

  return (
    <main>
      <h1>Dashboard</h1>
      <section className="section__cards">
        <Card title="Diversidade de Itens" quantity={differentItems} />
        <Card title="Inventário Total" quantity={totalItems} />
        <Card title="Itens Recentes" quantity={recentItems} />
        <Card title="Itens Acabando" quantity={runningOutItems} />
      </section>
      <section className="section__list">
        <ListRecentItems/>
        <ListRunningOutItems/>
      </section>
    </main>
  );
}