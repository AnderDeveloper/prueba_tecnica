//https://www.youtube.com/watch?v=3dSkc-DIM74

import express, { json } from 'express'   
import router from './routes/empresas.routes.js'

const app = express()

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result)
})
app.use(express.json())


app.use(router)

app.listen(3000)
console.log("Se esta ejecutando por el puerto 3000")