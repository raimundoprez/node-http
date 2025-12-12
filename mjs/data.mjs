import process from "node:process";

const data = {
    title: "Servidor de NodeJS",
    subtitle: "Información de interés",
    description: `Este servidor utiliza la versión ${process.version} de NodeJS y corre en un SO ${process.platform}.`
}

export default data;