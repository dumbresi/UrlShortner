
const crypto = require('crypto');


const urlShortner=(longUrl)=>{
    let uuid = crypto.randomUUID();
    return uuid;
}

export default {urlShortner}