const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const puerto = process.env.PORT;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/", require("./rutas.js"));

app.listen(puerto, ()=>{
	console.log("Servidor corriendo en el puerto: "+puerto);
});