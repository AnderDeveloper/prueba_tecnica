import {check} from 'express-validator'
import validateItem from '../helpers/handleValidator.js'

const validatePatch = [
    check('name').not().isEmpty(),
    check('country').not().isEmpty(),
    check('hubspot_id').isEmpty().not().isInt(),
    check('is_active').isEmpty().not().isIn([0,1]),
    (req, res, next) => {
        validateItem(req, res, next)
    }
]

export default validatePatch