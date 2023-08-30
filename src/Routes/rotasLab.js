const Router = require('express')
const LabController = require('../controllers/LabController')
const { authMiddleware } = require('../middleware/auth-middleware')

const router = Router()

//  ROTAS
router.post('/', authMiddleware, LabController.add)
// router.get('/', (req, res) => {
//     res.json('teste2')
// })

router.get('/', authMiddleware, LabController.listAll)
// router.get('/usuario', (req, res) => {
//     res.json('teste')
// })

// router.get('/:id', LabController.findId)

router.put('/:id', authMiddleware, LabController.update)

router.delete('/:id', authMiddleware, LabController.deleta)

module.exports = router
