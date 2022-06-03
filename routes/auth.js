/*
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');

router.post(
    '/new',
    [ // middlewares
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password minimum length 6').isLength({ min: 6 }),
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password minimum length 6').isLength({ min: 6 }),
    ],
    loginUser
);

router.get('/renew', renewToken);


module.exports = router;