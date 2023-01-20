import {Router} from 'express';
import { getEmpresas, createEmpresas, updateEmpresas, deleteEmpresas, getEmpresa } from '../controllers/empresas.controllers.js';


const router = Router()

router.get('/companys', getEmpresas)

router.get('/company/:id', getEmpresa)

router.post('/companys', createEmpresas )

router.patch('/companys/:id', updateEmpresas)

router.delete('/companys/:id', deleteEmpresas)

export default router