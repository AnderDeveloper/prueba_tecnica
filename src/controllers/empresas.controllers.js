import {pool} from '../db.js'

export const getEmpresas = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM companys') 
        res.json(rows)
    }catch (error){
        return res.status(500).json({message:'Algo salió mal'})
    }
}

export const getEmpresa = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM companys WHERE id = ?', [req.params.id]) 
        if (rows.length <= 0) return res.status(404).json({message: 'Empresas not found'})
        res.json(rows[0])
    }catch (error){
        return res.status(500).json({message:'Algo salió mal'})
    }
}


export const createEmpresas = async (req, res) => {
    const {name, country, hubspot_id, is_active, create_date} = req.body
    try{
        
        const [rows] = await pool.query('INSERT INTO companys (name, country, hubspot_id, is_active) values (?, ?, ?, ?)',
        [name, country, hubspot_id, is_active, create_date])
        res.send({id: rows.insertId, name, country, hubspot_id, is_active})
    }catch (error){
        return res.status(500).json({message:'Algo salió mal'})
    }
}

export const updateEmpresas = async (req, res) => {
    const {id} = req.params
    const {name, country, hubspot_id, is_active} = req.body
    try{
        const [result] = await pool.query('UPDATE companys SET name = IFNULL(?, name), country = IFNULL(?, country), hubspot_id = IFNULL(?, hubspot_id), is_active = IFNULL(?, is_active) WHERE id = ?', [name, country, hubspot_id, is_active, id])
        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Empresa not found'
        })

        const [rows] = await pool.query('SELECT * FROM companys WHERE id = ?',[id])

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({message:'Algo salió mal'})
    }
}

export const deleteEmpresas = async (req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM companys WHERE id = ?',[req.params.id])
        console.log(result)

        if (result.affectedRows <= 0) return res.status(404).json({message:'Empresa not found'})
        res.sendStatus(204)
    }catch (error){
        return res.status(500).json({message:'Algo salió mal'})
    }
}