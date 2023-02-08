import {Router} from 'express';
import { getEmpresas, createEmpresas, updateEmpresas, deleteEmpresas, getEmpresa } from '../controllers/empresas.controllers.js';
import validatePost from '../validators/postValidator.js'
import validatePatch from '../validators/patchValidator.js';
import {authMiddelware} from '../middleware/middlewareSesion.js';


const routerCompanys = Router()

routerCompanys.get('/companys', authMiddelware, getEmpresas)

routerCompanys.get('/company/:id', authMiddelware, getEmpresa)

routerCompanys.post('/companys', validatePost, authMiddelware, createEmpresas)

routerCompanys.patch('/companys/:id', validatePatch, authMiddelware, updateEmpresas)

routerCompanys.delete('/companys/:id', authMiddelware, deleteEmpresas)

export default routerCompanys