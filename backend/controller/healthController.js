

const healthz= async(req,res)=>{
    try {
        res.json("Success")
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}

export default
 {
    healthz
 }
