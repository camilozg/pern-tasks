import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }

        req.userId = decoded.id
        next()
    })
}