import {Router} from 'express';
import { getEmpresas, createEmpresas, updateEmpresas, deleteEmpresas, getEmpresa } from '../controllers/empresas.controllers.js';
import validatePost from '../validators/postValidator.js'
import validatePatch from '../validators/patchValidator.js';



const router = Router()

router.get('/companys', getEmpresas)

router.get('/company/:id', getEmpresa)

router.post('/companys', validatePost, createEmpresas )

router.patch('/companys/:id', validatePatch, updateEmpresas)

router.delete('/companys/:id', deleteEmpresas)

export default router