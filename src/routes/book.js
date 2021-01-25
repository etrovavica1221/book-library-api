const express = require('express');

const router = express.Router();
const bookController = require('../controllers/book');

router.route('/').get(bookController.getBooks);
router.route('/').post(bookController.createBook);

router.route('/:id').get(bookController.getBookById);
router.route('/:id').patch(bookController.updateBook);
router.route('/:id').delete(bookController.deleteBook);

module.exports = router;
