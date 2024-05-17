import "./styles.scss";
import { useContext, useState } from "react";
import ItemListContext from "../../contexts/ItemListContext";
import { useNavigate } from "react-router-dom";

export default function NewItem () {
  const item = useContext(ItemListContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const id = Math.floor(Math.random() * 1000000);
    const currentDate = new Date();
    const creationDate = currentDate.toLocaleString();
    const lastUpdateDate = "Nenhuma atualização feita.";
    item?.addItem({ id, name, quantity, price, category, description, creationDate, lastUpdateDate });
    navigate("/itens");
  }

  return (
    <form className="new-item" onSubmit={handleSubmit}>
      <div className="input-section">
        <div className="new-item__input">
          <label>Nome</label>
          <input type="text" name="name" value={name} placeholder="Escreva o nome do item..." onChange={(ev) => setName(ev.target.value)} required/>
        </div>
        <div className="new-item__input">
          <label>Quantidade</label>
          <input type="number" min={0} name="quantity" value={quantity} onChange={(ev) => setQuantity(+ev.target.value)} required/>
        </div>
        <div className="new-item__input">
          <label>Preço</label>
          <input type="number" min={0} name="price" value={price} onChange={(ev) => setPrice(+ev.target.value)} required/>
        </div>
        <div className="new-item__input">
          <label>Categoria</label>
          <select name="category" id="category" value={category} defaultValue={category} onChange={(ev) => setCategory(ev.target.value)} required>
            <option disabled value="">Selecione uma opção...</option>
            <option value="Jogos">Jogos</option>
            <option value="Livros">Livros</option>
            <option value="Decorações">Decorações</option>
          </select>
        </div>
      </div>
      <div className="new-item__input">
        <label>Descrição</label>
        <textarea name="description" value={description} placeholder="Escreva uma breve descrição do item..." onChange={(ev) => setDescription(ev.target.value)} required></textarea>
        <button type="submit" className="updateBtn">Salvar</button>
      </div>
    </form>
  );
}