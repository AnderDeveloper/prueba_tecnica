import { matchedData } from 'express-validator'
import {pool} from '../db.js'
import { encrypt, compare } from '../helpers/handelPassword.js'
import {tokensign} from '../helpers/handleToken.js'




export const createUser = async (req, res) => {
    try{    
    req = matchedData(req)
    const passwordHash = await encrypt(req.password)
    const body = {...req, password:passwordHash}
    
        const [rows] = await pool.query('INSERT INTO users (user, name, email, password) values (?, ?, ?, ?)',
        [body.user, body.name, body.email, body.password])
     
    }catch (error){
        console.log(error)
        return res.status(500).json({message:'something went wrong when registering user'})
    }
}
    
export const deleteUser = async (req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM users WHERE id = ?',[req.params.id])
        console.log(result)

        if (result.affectedRows <= 0) return res.status(404).json({message:'User not found'})
        res.sendStatus(204)
    }catch (error){
        return res.status(500).json({message:'Something went wrong'})
    }
}


export const loginUser = async (req, res) =>{
            
    try{
        req = matchedData(req)
        const userFind = (await pool.query('SELECT * FROM users WHERE email = ?', [req.email]))
        const userOk = userFind[0]
        if(!userOk[0]){
            res.status(404).json({message:'USER NOT EXISTS'})
            return
        }
        const passwordHash = userOk[0].password
        const check = await compare(req.password, passwordHash)
        if(!check){
            res.status(401).json({message:'PASSWORD INVALID'})
            return
        }
        
        userOk[0].password = undefined
        console.log(userOk[0])
        const data ={
            token: await tokensign(userOk[0]),
            userOk
        }
        
        console.log(data)
        res.send({data})
        
    }catch (error){
        console.log(error)
        return res.status(500).json({message:'Something went wrong'})
    }
}