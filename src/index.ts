import express from "express";
import PruebaService from "./service/prueba.service";

const app = express();

app.get("/", (req, res) => {
    res.send("ok");
});

app.get("/test", (req, res) => {
    const service = new PruebaService();
    res.send(service.hacerAlgo());
});

app.listen(3000, () => {
    console.log("Corriendo en el puerto 3000 - Nuevo 2");
});
