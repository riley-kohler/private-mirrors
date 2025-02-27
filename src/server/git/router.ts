import { gitProcedure, router } from '../../utils/trpc-server'
import { syncReposHandler } from './controller'
import { SyncReposSchema } from './schema'
import { logger } from '../../utils/logger'

const routerLogger = logger.getSubLogger({ name: 'router' })

const gitRouter = router({
  syncRepos: gitProcedure.input(SyncReposSchema).mutation(({ input }) => {
    routerLogger.info('Received syncRepos request in trpc server')
    return syncReposHandler({ input })
  }),
})

export default gitRouter
