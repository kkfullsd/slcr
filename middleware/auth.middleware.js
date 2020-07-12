const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    // if (req.method = 'OPTIONS') {
    //     console.log('middlware here its OPTIONS')
    //     return next()
    // }


    try {
        const token = req.headers.authorization.split('')[1]

        console.log(req.headers)

        if (!token) {
            res.status(401).json({message: 'user is not authorised'})
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        next()

    } catch (e) {
        res.status(401).json({message: 'user is not authorised e'})
    }
}