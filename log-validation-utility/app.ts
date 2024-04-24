import express, { Application } from 'express'
import healthRoutes from './routes/healthCheck'
import validateRoutes from './routes/validate'

const createServer = (): express.Application => {
  const app: Application = express()

  // Body parsing Middleware
  app.use(express.json({ limit: '50mb' }))

  app.use('/', healthRoutes)
  app.use('/api', validateRoutes)

  return app
}

export default createServer
