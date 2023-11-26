import React, { useState } from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

import background1 from "/src/components/cards/img/redBook.png";
import background2 from "/src/components/cards/img/blueBook.png";
import background3 from "/src/components/cards/img/greenBook.png";
import background4 from "/src/components/cards/img/orangeBook.png";


export default function Card(props) {
  const [open, setOpen] = useState(false);

  const getRandomImage = () => {
    const backgroundImages = [background1, background2, background3, background4];
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  };

  return (
    <div>
      <FormDialog
        open={open}
        setOpen={setOpen}
        nome={props.nome}
        categoria={props.categoria}
        custo={props.custo}
        volume={props.volume}
        status={props.status}
        nota={props.nota}
        ranque={props.ranque}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}
            style={{backgroundImage: `url(${getRandomImage()})`}}>
        <h1 className="card-nome">{props.nome}</h1>
        <p className="card-id">{props.id}</p>
        <h2 className="card-categoria">{props.categoria}</h2>
        <h2 className="card-volume">Vol: {props.volume}</h2>
        <h2 className="card-status">{props.status}</h2>
        <h2 className="card-nota">Nota: {props.nota}</h2>
        <h2 className="card-ranque">Prioridade: {props.ranque}</h2>
        <h3 className="card-custo">R${props.custo}</h3>
      </div>
    </div>
  );
}