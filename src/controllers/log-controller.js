/**
 * author: Refaat
 * this module exports controller functions for the log-router
 */
const logService = require('../services/log-service');

// this controller responds with an array of log objects
const getAllLogs = async (request, response) => {
    try {
        // get page from request queries; default to zero
        const { page = 0 } = request.query; 

        // respnond with an array of log objects
        const logs = await logService.getAllLogs(parseInt(page));
        response.status(200).json({
            data: logs
        });
    } catch (error) {
        response.status(500).json({
            error: error.message
        });
    }
}

// this controller responds with a log object specified by an id
const getLogById = async (request, response) => {
    try {
        // respond with a log object specified by an id 
        const log = await logService.getLogById(request.params.id);
        response.status(200).json({
            data: log
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            error: error.message
        });
    }
}

// this controller responds with a newly created log object
const createLog = async (request, response) => {
    try {
        // respond with the created log object
        const log = await logService.createLog(request.body);
        response.status(200).json({
            data: log
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            error: error.message
        });
    }
}

// this controller responds with a log object before it is updated
const updateLog = async (request, response) => {
    try {
        // respond with the updated log object  
        const log = await logService.updateLog(request.params.id, request.body);
        response.status(200).json({
            data: log
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            error: error.message
        });
    }
}

// this controller responds with a deleted log object
const deleteLog = async (request, response) => {
    try {
        // respond with the deleted log object
        const log = await logService.deleteLog(request.params.id); 
        response.status(200).json({
            message: log
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            error: error.message
        });
    }
}


module.exports = { getAllLogs, getLogById, createLog, updateLog, deleteLog }