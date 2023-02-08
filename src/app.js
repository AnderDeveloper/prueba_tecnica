import express, { json } from 'express'  
import cors from 'cors'
import helmet from 'helmet'
import './config/config.js'
import {notFound} from './middleware/middlewares.js'
import routerCompanys from './routes/companyRoutes.js'
import routerUser from './routes/userRoutes.js'

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(routerCompanys) 
app.use(routerUser)
app.use(notFound)





export default app;