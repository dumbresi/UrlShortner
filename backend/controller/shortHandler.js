import UrlMap from "../model/urlModel.js"
import urlShortner from "../helper/shortner.js"

const shorten= async(req,res)=>{
    const longUrl= req.body.longUrl;
    const short=urlShortner(longUrl)
    const shorturl=`http://localhost:4000/tinyUrl/${short}`
    try {
        const newMap = await UrlMap.create({shortUrl: short,longUrl})
        res.status(201).json(shorturl);
    } catch (error) {
        res.status(500).json(error)
    }
   
}

const getLong= async(req,res)=>{
    const uuid=req.params.uuid;
    try {
        const map= await UrlMap.findOne({where:{shortUrl: uuid}});
        if (!map) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        res.redirect(map.longUrl);
    } catch (error) {
        res.status(500).json(error)
    }
}


export default{
    shorten,
    getLong
}