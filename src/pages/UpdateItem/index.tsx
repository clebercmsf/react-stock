import "./styles.scss";
import { useLoaderData, useNavigate  } from "react-router-dom";
import ItemListContext, { ItemType } from "../../contexts/ItemListContext";
import { useContext, useState } from "react";

export default function NewItem () {
  const itemListContext = useContext(ItemListContext);
  const item = useLoaderData() as ItemType;
  const navigate = useNavigate();

  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const id = item.id;
    const creationDate = item.creationDate;
    const lastUpdateDate = item.lastUpdateDate;
    itemListContext?.updateItem({ id, name, quantity, price, category, description, creationDate, lastUpdateDate });
    navigate("/itens");
  }

  return (
    <form className="new-item" onSubmit={handleSubmit}>
      <div className="input-section">
        <div className="new-item__input">
          <label>Nome</label>
          <input type="text" name="name" value={name} placeholder="Escreva o nome do item..." onChange={(ev) => setName(ev.target.value)}/>
        </div>
        <div className="new-item__input">
          <label>Quantidade</label>
          <input type="number" min={0} name="quantity" value={quantity} onChange={(ev) => setQuantity(+ev.target.value)}/>
        </div>
        <div className="new-item__input">
          <label>Preço</label>
          <input type="number" min={0} name="price" value={price} onChange={(ev) => setPrice(+ev.target.value)}/>
        </div>
        <div className="new-item__input">
          <label>Categoria</label>
          <select name="category" id="category" value={category} onChange={(ev) => setCategory(ev.target.value)}>
            <option disabled value="">Selecione uma opção...</option>
            <option value="Jogos">Jogos</option>
            <option value="Livros">Livros</option>
            <option value="Decorações">Decorações</option>
          </select>
        </div>
      </div>
      <div className="new-item__input">
        <label>Descrição</label>
        <textarea name="description" value={description} placeholder="Escreva uma breve descrição do item..." onChange={(ev) => setDescription(ev.target.value)}></textarea>
        <button type="submit" className="updateBtn">Salvar</button>
      </div>
    </form>
  );
}