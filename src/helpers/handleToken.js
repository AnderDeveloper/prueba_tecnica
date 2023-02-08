import JsonWebToken from "jsonwebtoken";
import {config} from 'dotenv'
config()

export const tokensign = async (id, name, email) =>{
    const sign = JsonWebToken.sign({
        _id: id,
        _name: name,
        _email: email,
     
    },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h"
        })
    return sign
    
}   

export const verifyToken = async (jwtToken) => {
    try{
        return JsonWebToken.verify(jwtToken, process.env.JWT_SECRET)

    }catch (e){
        return null
    }

}



