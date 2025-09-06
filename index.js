const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const membros = [
  { id: 1, nome: "Bang Chan", solo: "Red Lights (com Hyunjin)" },
  { id: 2, nome: "Lee Know", solo: "Drive (com Bang Chan)" },
  { id: 3, nome: "Changbin", solo: "Streetlight (com Bang Chan)" },
  { id: 4, nome: "Hyunjin", solo: "Play With Fire (cover)" },
  { id: 5, nome: "Han", solo: "Alien" },
  { id: 6, nome: "Felix", solo: "Deep End" },
  { id: 7, nome: "Seungmin", solo: "Love Me or Leave Me (cover)" },
  { id: 8, nome: "I.N", solo: "Maknae on Top (com Bang Chan e Changbin)" }
];

app.get("/", (req, res) => {
  res.send(`
    <h1>API Stray Kids</h1>
    <p>Clique no link abaixo para acessar a lista de membros e seus solos:</p>
    <a href="/membros">Rota dos membros</a>
  `);
});

app.get("/membros", (req, res) => {
  res.json(membros);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
