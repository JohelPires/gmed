const Router = require('express')
const PAController = require('../controllers/PAController')
const { authMiddleware } = require('../middleware/auth-middleware')

const router = Router()

//  ROTAS
router.post('/', authMiddleware, PAController.add)
// router.get('/', (req, res) => {
//     res.json('teste2')
// })

router.get('/', authMiddleware, PAController.listAll)
// router.get('/usuario', (req, res) => {
//     res.json('teste')
// })

// router.get('/:id', PAController.findId)

router.put('/:id', authMiddleware, PAController.update)

router.delete('/:id', authMiddleware, PAController.deleta)

module.exports = router
