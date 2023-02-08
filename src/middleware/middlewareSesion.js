import { verifyToken } from "../helpers/handleToken.js";

export const authMiddelware = async (req, res, next) => {
    try{
        if (!req.headers.authorization){
            res.status(401).json({message: "NOT TOKEN"})    
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        
        const dataToken = await verifyToken(token)
        
        if(!dataToken._id){
            res.status(401).json({message: "ERROR ID TOKEN"})    
        }

        res.send("LOGIN SUCCESSFUL")
        next()

    }catch(e){
        res.status(401).json({message: "NOT SESSION"})
    }

}