import { Link } from "react-router-dom";
import "./styles.scss";

type ItemProps = {
  id: number;
  name: string;
  quantity: number | undefined;
}

export default function ResumeItem ({ id, name, quantity }: ItemProps) {
  return (
    <div className="resume-item">
      <span>{name}</span>
      {quantity !== undefined ? <span>{`${quantity} unid.`}</span> : <span>{quantity}</span>}
      <div>
        <Link to={`/itens/${id}`}><button className="showBtn">Ver</button></Link>
      </div>
    </div>
  );
}