import app from './app.js'
import { PORT } from './config.js'

app.listen(PORT)
console.log("Se esta ejecutando por el puerto", PORT)