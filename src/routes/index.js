import Router from 'koa-router'
import getHealth from './health/health'
import getHome from './health/home'
import users from './user/user'

const router = new Router()

router.get('/', getHome)
router.get('/health', getHealth)
router.get('/api/users', users.getAllUsers)
router.put('/api/user', users.createUser)
router.delete('/api/user/:rol', users.removeUser)

export default router
