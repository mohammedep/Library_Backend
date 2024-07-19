const express = require('express')
const { getAllAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorControllers')
const router = express.Router()

// 1. get all authors
router.get('/', getAllAuthors)
// 2. get authors by id
router.get('/:authorId', getAuthorById)
// 3. add author
router.post('/', addAuthor)
// 4. update author
router.patch('/:authorId', updateAuthor)
// 5. delete author
router.delete('/:authorId', deleteAuthor)

module.exports = router