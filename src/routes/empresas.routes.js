import {Router} from 'express';
import { getEmpresas, createEmpresas, updateEmpresas, deleteEmpresas, getEmpresa } from '../controllers/empresas.controllers.js';


const router = Router()

router.get('/empresas', getEmpresas)

router.get('/empresa/:id', getEmpresa)

router.post('/empresas', createEmpresas )

router.patch('/empresas/:id', updateEmpresas)

router.delete('/empresas/:id', deleteEmpresas)

export default router