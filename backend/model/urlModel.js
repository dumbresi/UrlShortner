import sequelize from '../db/db.js'

const {DataTypes} = require('sequelize');

const UrlMap=sequelize.define("UrlMap",{
    shortUrl: {
        type: DataTypes.STRING,
        unique : true,
    },
    longUrl: DataTypes.STRING
})

export default UrlMap;
