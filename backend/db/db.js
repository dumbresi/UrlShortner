import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const sequelize= new Sequelize(process.env.DB_NAME,process.env.DB_Username,process.env.DB_Password,{
    host: 'localhost',
    dialect: 'postgres'
})

export default sequelize