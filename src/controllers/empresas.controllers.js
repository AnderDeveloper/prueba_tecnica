import {pool} from '../db.js'

export const getEmpresas = (req, res) => { res.send('obtebiendo empleados')
}

export const createEmpresas = async (req, res) => {
    const {name, country, hubspot_id, is_active, create_date} = req.body
    const [rows] = await pool.query('INSERT INTO companys (name, country, hubspot_id, is_active) values (?, ?, ?, ?)',
    [name, country, hubspot_id, is_active, create_date])
    res.send({id: rows.insertId, name, country, hubspot_id, is_active})
}

export const updateEmpresas = (req, res) => res.send('actualizando empleados')

export const deleteEmpresas = (req, res) => res.send('eliminando empleados')