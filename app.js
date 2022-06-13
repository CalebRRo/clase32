const express = require("express");
const app = express();
const port = 3030; // se guarda puerto en una variable

//RUTAS
app.get("/", (req,res) => res.send("HOME")); //home

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));



