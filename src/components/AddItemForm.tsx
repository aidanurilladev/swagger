import React, { useEffect, useState } from "react";
import { addItem, deleteItem } from "../api";
import scss from "./AddItemForm.module.scss";
import axios from "axios";
const api = import.meta.env.VITE_URL;



const AddItemForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newItem = {
        title,
        photo,
        price: 0,
        quantity: 0,
      };
      const data = await addItem(newItem);

      console.log("Элемент добавлен", data);
      setTitle("");
      listProduct()
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleDelete = async (itemId: string) => {
    try {
      await deleteItem(itemId);
      // onItemDeleted(itemId);
    } catch (error) {
      console.error("Ошибка при удалении элемента", error);
    }
    listProduct();
  };

  const [data, setData] = useState([]);

  const listProduct = async () => {
    const { data } = await axios.get(`${api}/api/v1/products/get`, {
      withCredentials: true,
    });
    setData(data.results);
  };
  console.log(data);

  useEffect(() => {
    listProduct();
  }, []);

  return (
    <div className={scss.AddItem}>
      <div className={scss.box}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название элемента"
          required
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="URL..."
          required
        />

        <button onClick={handleSubmit}>Добавить</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div className={scss.block}>
        {data.map((el, index) => (
          <div key={index} className={scss.list}>
            <ul>
              <li>{el.title}</li>
            </ul>
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddItemForm;
