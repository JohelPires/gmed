const Router = require('express')
const MedController = require('../controllers/MedController')
const { authMiddleware } = require('../middleware/auth-middleware')

const router = Router()

//  ROTAS
router.post('/', authMiddleware, MedController.add)
// router.get('/', (req, res) => {
//     res.json('teste2')
// })

router.get('/', authMiddleware, MedController.listAll)
// router.get('/usuario', (req, res) => {
//     res.json('teste')
// })

// router.get('/:id', MedController.findId)

router.put('/:id', authMiddleware, MedController.update)

router.delete('/:id', authMiddleware, MedController.deleta)

module.exports = router
