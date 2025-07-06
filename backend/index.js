import { configDotenv } from "dotenv";
import express from "express";
import router from "./router/routes.js";


const app = express();
const port=4000

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});