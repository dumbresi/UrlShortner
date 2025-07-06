import express from "express";
import router from "./router/routes.js";
import sequelize from './db/db.js'


const app = express();
app.use(express.json());
const port=4000

app.use(router)

const start= async() =>{
    await sequelize.authenticate();
    console.log('DB connected.');
    await sequelize.sync();
    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
}

start();
