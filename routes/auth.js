/*
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/field-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { jwtValidator } = require('../middlewares/jwt-validator');

const router = Router();

router.post(
    '/new',
    [ // middlewares
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password minimum length 6').isLength({ min: 6 }),
        fieldValidator
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password minimum length 6').isLength({ min: 6 }),
        fieldValidator
    ],
    loginUser
);

router.get(
    '/renew',
    [
        jwtValidator
    ],
    renewToken
);


module.exports = router;