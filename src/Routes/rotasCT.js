const Router = require('express')
const CTController = require('../controllers/CTController')
const { authMiddleware } = require('../middleware/auth-middleware')

const router = Router()

//  ROTAS
router.post('/', authMiddleware, CTController.add)
// router.get('/', (req, res) => {
//     res.json('teste2')
// })

router.get('/', authMiddleware, CTController.listAll)
// router.get('/usuario', (req, res) => {
//     res.json('teste')
// })

// router.get('/:id', CTController.findId)

router.put('/:id', authMiddleware, CTController.update)

router.delete('/:id', authMiddleware, CTController.deleta)

module.exports = router
