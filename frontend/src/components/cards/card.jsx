import React, { useState } from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = useState(false);

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
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-nome">{props.nome}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-categoria">{props.categoria}</p>
        <h3 className="card-custo">R${props.custo}</h3>
        <p className="card-volume">{props.volume}</p>
        <h3 className="card-status">{props.status}</h3>
        <p className="card-nota">{props.nota}</p>
        <p className="card-ranque">{props.ranque}</p>
      </div>
    </div>
  );
}