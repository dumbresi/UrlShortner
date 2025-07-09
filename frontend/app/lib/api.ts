import axios from "axios"
import { get } from "http";


const getLongUrl=async ()=>{
    const res=await axios.get("get/longurl");
    return res.data;
}

const shorten=async (longurl: string)=>{
    const res= await axios.post('',{longurl})
}

export default{
    getLongUrl,shorten
}