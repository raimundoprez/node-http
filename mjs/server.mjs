import http from "node:http";
import data from "./data.mjs";

const server = http.createServer((_, res) => {
    console.log("Petición recibida.");

    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <main>
                <h1>${data.title}</h1>
                <h2>${data.subtitle}</h2>
                <p>${data.description}</p>
            </main>
        </body>
    `);
});

server.listen(80, () => {
    console.log("Servidor arrancado.");
});