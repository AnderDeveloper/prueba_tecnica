import {Router} from 'express';
import { getEmpresas, createEmpresas, updateEmpresas, deleteEmpresas } from '../controllers/empresas.controllers.js';


const router = Router()

router.get('/employes', getEmpresas)

router.post('/employes', createEmpresas )

router.put('/employes', updateEmpresas)

router.delete('/employes', deleteEmpresas)

export default router