import winston from 'winston'

export const logger = winston.createLogger({
    exitOnError: false,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.cli()
            )
        })
    ]
})