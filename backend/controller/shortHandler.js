import UrlMap from "../model/urlModel"
import {urlShortner } from "../helper/shortner.js"

const shorten= async(req,res)=>{
    if(req.params==null){
        res.status(400).json("Bad url")
    }
    const longUrl= req.params;
    const short=urlShortner(longUrl)
    const shorturl=`http://localhost:${process.env.port}/tinyUrl/${short}`
    try {
        const newMap = await UrlMap.create({short,longUrl})
        res.status(201).json(shorturl);
    } catch (error) {
        res.status(500).json(error)
    }
   
}

const getLong= async(req,res)=>{
    const uuid=req.params.uuid;
    try {
        const map= await UrlMap.findOne({where:{uuid}});
        return map.longUrl
    } catch (error) {
        res.status(500).json(error)
    }
}


export default{
    shorten,
    getLong
}