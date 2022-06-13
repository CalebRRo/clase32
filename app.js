const express = require("express");
const path = require("path");
const app = express();
const port = 3030; // se guarda puerto en una variable

//RUTAS
//app.get("/", (req,res) => res.send("HOME")); //home
app.get("/",(req,res)=> res.sendFile(path.join(__dirname, "./views/home.html")));

app.get("/detalle",(req,res)=> res.sendFile(path.join(__dirname, "./views/detalle.html")));

app.get("/registro",(req,res)=> res.sendFile(path.join(__dirname, "./views/registro.html")));

app.get("/login",(req,res)=> res.sendFile(path.join(__dirname, "./views/login.html")));

app.get("/carrito",(req,res)=> res.sendFile(path.join(__dirname, "./views/carrito.html")));

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));



