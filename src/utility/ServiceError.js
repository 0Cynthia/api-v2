/**
 * author: Refaat
 * this class extends Error to add a statuscode; thrown by the service-layer
 */
class ServiceError extends Error {
    /**
     * user generated constructor
     * @param {*} message a error message
     * @param {*} statuscode a HTTP status code
     */
    constructor(message, statuscode) {
        super(message);
        this.statuscode = statuscode;
    }
}