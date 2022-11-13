/**
 * author: Refaat
 * this moudle exports service functions for the log-controller
 */
const Log = require('../models/log-model');

const DOCUMENTS_PER_PAGE = 2;

/**
 * this service queries the database for an array of log objects
 * @param {Integer} page a specified page
 * @return an array of log objects
 * 
 */
const getAllLogs = async (page) => {
    try {
        // declare & initialize pagination information
        const currentPage = page;
        const totalPages = Math.ceil(await Log.countDocuments()/DOCUMENTS_PER_PAGE) - 1;
        let nextPage, prevPage;

        // clamp pages if the given page is out of bounds (0 to totalPages)
        if (page > totalPages) page = totalPages;
        if (page < 0) page = 0;

        // prevents nextPage or prevPage to link to pages that dont exist (out of bounds)
        if (page < totalPages) {
            nextPage = `http://localhost:3000/api/logs/?page=${page+1}`;
        }

        if (page > 0) {
            prevPage = `http://localhost:3000/api/logs/?page=${page-1}`;
        }

        // query database for all logs,
        // this is not the most efficient way to paginate in mongoose
        const logs = await Log.find()
            .limit(DOCUMENTS_PER_PAGE)
            .skip((page) * DOCUMENTS_PER_PAGE)

        return {
            results: { logs },
            pagination: {
                currentPage,
                totalPages,
                nextPage,
                prevPage
            }
        }
    } catch (error) {
        throw error;
    }
}

/**
 * this service quieries the database of a log object specified by an id
 * @param {String} _id the mongodb object id of the log
 * @return a log object specified by an id
 */
const getLogById = async (_id) => {
    try {
        const log = await Log.findOne({ _id });
        return { log }
    } catch (error) {
        throw error;
    }
}

/**
 * this services creates a new log in the database
* @param {JSON} log a log object
* @return the created log object
 */
const createLog = async (log) => {
    try {
        const createdLog = await Log.create(log);
        return { createdLog }
    } catch (error) {
        throw error;
    }
}

/**
 * this service updates an existing log in the database
 * @param {JSON} log a log object
 * @param {String} _id the mongodb object id of the log
 * @return the log object before it is updated
 */
const updateLog = async (_id, log) => {
    try {
        const updateLog = await Log.findOneAndUpdate({ _id }, log);
        return { updateLog }
    } catch (error) {
        throw error;
    }
}

/**
 * this service deletes an existing log in the database
 * @param {String} _id the mongodb object id of the log
 * @return the deleted log object
 */
const deleteLog = async (_id) => {
    try {
        const deletedLog = await Log.findOneAndDelete({ _id });
        return { deletedLog }
    } catch (error) {
        throw error;
    }
}


module.exports = { getAllLogs, getLogById, createLog, updateLog, deleteLog }