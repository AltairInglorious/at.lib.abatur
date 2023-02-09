import express, { Express, Request, Response } from 'express'
import { logger } from './modules/logger'


const app: Express = express()

app.get('/abmq', (req: Request, res: Response) => {

})

app.listen(process.env.PORT || 3000, () => {
    logger.info(`🚀 Abatur successfully started on port ${process.env.PORT || 3000}!`)
})