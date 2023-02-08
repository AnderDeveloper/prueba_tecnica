import {Router} from 'express';
import validateUser from '../validators/userValidator.js'
import {createUser, deleteUser, loginUser} from '../controllers/user.controllers.js'
import validateLogin from '../validators/loginValidator.js';





const routerUser = Router()

routerUser.post('/user', validateUser, createUser)

routerUser.post('/login', validateLogin, loginUser)

routerUser.delete('/user/:id', deleteUser)

export default routerUser