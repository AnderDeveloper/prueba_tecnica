import {check} from 'express-validator'
import validateItem from '../helpers/handleValidator.js'

const validateUser = [
    check('name').notEmpty(),
    check('user').notEmpty().isLength({min:4, max:10}),
    check('email').notEmpty().isEmail(),
    check('password').notEmpty().isAlphanumeric().isLength({min:8, max:10}),
    (req, res, next) => {
        validateItem(req, res, next)
    }
]

export default validateUser