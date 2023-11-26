import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/card";

const statusOptions = ["Lendo", "Lido", "Vou Ler", "Quero Comprar"];

export default function App() {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  console.log(listCard);
  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      custo: values.custo,
      categoria: values.categoria,
      volume: values.volume,
      status: values.status,
      nota: values.nota,
      ranque: values.ranque,
      
    }).then(() => {
      Axios.post("http://localhost:3001/search", {
        nome: values.nome,
        custo: values.custo,
        categoria: values.categoria,
        volume: values.volume,
        status: values.status,
        nota: values.nota,
        ranque: values.ranque,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            id: response.data[0].id,
            nome: values.nome,
            custo: values.custo,
            categoria: values.categoria,
            volume: values.volume,
            status: values.status,
            nota: values.nota,
            ranque: values.ranque,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Meus Livros</h1>

        <input
          type="text"
          name="nome"
          placeholder="Nome do Livro"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Preço"
          name="custo"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Categoria"
          name="categoria"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Volume"
          name="volume"
          className="register-input"
          onChange={handleaddValues}
        />
        <select
          name="status"
          className="register-input"
          onChange={handleaddValues}
        >
          <option value="">Selecione o status</option>
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Nota para o Livro"
          name="nota"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Ranque de Prioridade"
          name="ranque"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterGame} className="register-button">
          Cadastrar
        </button>
      </div>

      {listCard.map((val) => (
        <Card
          listCard={listCard}
          setListCard={setListCard}
          key={val.id}
          id={val.id}
          nome={val.nome}
          custo={val.custo}
          categoria={val.categoria}
          volume={val.volume}
          status={val.status}
          nota={val.nota}
          ranque={val.ranque}
        />
      ))}
    </div>
  );
}