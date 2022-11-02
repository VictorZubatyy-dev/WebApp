const errorHandler = (err, req, res, next) => {
    //if statuscode is set in controller put it into this statuscode variable else we have 500 error
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
        })
}

module.exports = {
    errorHandler,
}