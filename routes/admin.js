const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/admin/add-product', (req, res, next) => {
  res.send('<form action="admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('admin/add-product', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
});

module.exports = router;