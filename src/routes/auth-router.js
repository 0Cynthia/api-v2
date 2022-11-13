/**
 * author: Refaat
 * this module exports a router for the auth routes.
 * routes are binded to controller & middleware functions
 */
const express = require('express');
const router = express.Router();

// import validation middleware
const { sanitizeBody } = require('../middleware/sanitize-body');
const { emailSchema } = require('../schematics/email-schematic');

// import auth controller
const { sendJwtToken } = require('../controllers/auth-controller');

/** auth routes  **/
router.post('/auth/request',
    sanitizeBody(emailSchema),
    sendJwtToken);


module.exports = router;