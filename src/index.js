import spdy from 'spdy'
import fs from 'fs'
import path from 'path'
import app from './app.js'
import { PORT } from './config/config.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rutaKey = path.join(__dirname, 'certificates', 'localhost-privkey.pem')
const rutaCert = path.join(__dirname, 'certificates', 'localhost-cert.pem')


const options ={
    key: fs.readFileSync(rutaKey, 'utf-8'), 
    cert: fs.readFileSync(rutaCert, 'utf-8')
};


spdy.createServer(options, app).listen(PORT, ()=>{

    console.log("Servidor HTTP/2 listening on port", PORT)
})
