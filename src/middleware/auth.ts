import { Request, Response } from "express"

export const authMiddleware = (req: Request, res: Response, next: () => void): void => {
    let token = req.headers['authorization']?.slice(7)
    // TODO: Check authorization header and add info to req.user
    next()
}