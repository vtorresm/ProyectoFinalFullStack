const express = require('express');
const router = express.Router();

const ferreteria = require('../controllers/ferreteria.controller');

router.get('/', ferreteria.getFerreterias);
router.post('/', ferreteria.createFerreteria);
router.get('/:id', ferreteria.getFerreteria);
router.put('/:id', ferreteria.editFerreteria);
router.delete('/:id', ferreteria.deleteFerreteria);

module.exports = router;