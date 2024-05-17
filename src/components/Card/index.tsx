import "./styles.scss";

type CardProps = {
  title: string;
  quantity: number;
}

export default function Card ({ title, quantity }: CardProps) {
  return (
    <div className="card">
      <div className="card__title">
        <label>{title}</label>
      </div>
      <div className="card__content">
        <span>{quantity}</span>
      </div>
    </div>
  );
}