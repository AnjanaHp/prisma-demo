const express = require('express');
const router = express.Router();
 
const prisma = require('../db/index');
 
//  POST /api/authors  -  Creates a new author
router.post('/authors', async (req, res, next) => {
  const { firstName, lastName, bio } = req.body;
 
  const newAuthorInfo = {
    firstName,
    lastName,
    bio
  };
  try{
const newAuthor = await prisma.author.create({ data: newAuthorInfo })
console.log('New author created', newAuthor);
res.status(201).json(newAuthor);
  }catch (error) {
    next(error);
  }   
});
 
module.exports = router;