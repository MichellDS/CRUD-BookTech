const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "titan",
  database: "booktech",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { nome } = req.body;
  const { custo } = req.body;
  const { categoria } = req.body;
  const { volume } = req.body;
  const { status } = req.body;
  const { nota } = req.body;
  const { ranque } = req.body;

  let mysql = "INSERT INTO books ( nome, custo, categoria, volume, status, nota, ranque) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(mysql, [nome, custo, categoria, volume, status, nota, ranque], (err, result) => {
    res.send(result);
  });
  
});

app.post("/search", (req, res) => {
  const { nome } = req.body;
  const { custo } = req.body;
  const { categoria } = req.body;
  const { volume } = req.body;
  const { status } = req.body;
  const { nota } = req.body;
  const { ranque } = req.body;

  let mysql =
    "SELECT * from books WHERE nome = ? AND custo = ? AND categoria = ? AND volume = ? AND status = ? AND nota = ? AND ranque = ?";
  db.query(mysql, [nome, custo, categoria, volume, status, nota, ranque], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM books";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { nome } = req.body;
  const { custo } = req.body;
  const { categoria } = req.body;
  const { volume } = req.body;
  const { status } = req.body;
  const { nota } = req.body;
  const { ranque } = req.body;
  let mysql = "UPDATE books SET nome = ?, custo = ?, categoria = ?, volume = ?, status = ?, nota = ?, ranque = ? WHERE id = ?";
  db.query(mysql, [nome, custo, categoria, volume, status, nota, ranque, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM books WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 30010");
});