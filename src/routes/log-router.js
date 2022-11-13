/**
 * author: Refaat
 * this module exports a router for the log routes.
 * routes are binded to controller & middleware functions
 */
const express = require('express');
const router = express.Router();

// import validation middleware 
const { logSchema } = require('../schematics/log-schematic');
const { sanitizeBody } = require('../middleware/sanitize-body');
const { sanitizeId } = require('../middleware/sanitize-id');

// import authentication middleware
const { isAuthenticated } = require('../middleware/is-authenticated');

// import log controller functions
const { getAllLogs, getLogById, createLog, updateLog, deleteLog } = require('../controllers/log-controller');

/** api routes **/
router.get('/api/logs',
    isAuthenticated,
    getAllLogs);

router.get('/api/logs/:id',
    isAuthenticated,
    sanitizeId,
    getLogById);

router.post('/api/logs',
    isAuthenticated,
    sanitizeBody(logSchema),
    createLog);

router.put('/api/logs/:id',
    isAuthenticated,
    sanitizeBody(logSchema),
    sanitizeId,
    updateLog);

router.delete('/api/logs/:id',
    isAuthenticated,
    sanitizeId,
    deleteLog);


module.exports = router;
