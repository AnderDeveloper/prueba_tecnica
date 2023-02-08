import {check} from 'express-validator'
import validateItem from '../helpers/handleValidator.js'

const validatePost = [
    check('name').exists().not().isEmpty(),
    check('country').exists().not().isEmpty(),
    check('hubspot_id').exists().not().isEmpty().isInt(),
    check('is_active').exists().not().isEmpty().isIn([0,1]),
    (req, res, next) => {
        validateItem(req, res, next) 
    }
]


export default validatePost





