const express = require('express')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookControllers')
const router = express.Router()

// 1. get all books
router.get('/', getAllBooks)
// 2. get books by id
router.get('/:bookId', getBookById)
// 3. add book
router.post('/', addBook)
// 4. update book
router.patch('/:bookId', updateBook)
// 5. delete book
router.delete('/:bookId', deleteBook)

module.exports = router