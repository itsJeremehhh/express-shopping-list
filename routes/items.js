const Item = require('../item');
const express = require('express');
const router = express.Router();

//get items

router.get('', (req, res, next) => {
    try {
        return res.json({items: Item.findAll() });
    } catch(err){
        return next(err)
    }
});

//post new item with price

router.post('', (req, res, next) => {
    try {
        let newItem = new Item(req.body.name, req.body.price);
        return res.json({item: newItem});
    } catch (err) {
        return next(err)
    }
});

//get item name 

router.get('/:name', (req, res, next) => {
    try {
        let foundItem = Item.find(req.params.name);
        return res.json({item: foundItem});
    } catch(err){
        return next(err)
    }
});

//patch items

router.patch('/:name', (req, res, next) => {
    try {
        let foundItem = Item.update(req.params.name, req.body);
        return res.json({item: foundItem});
    } catch (err) {
        return next(err)
    }
});

//deleting Items.

router.delete('/:name', (req, res, next) => {
    try {
        Item.remove(req.params.name);
        return res.json({message: 'Deleted'})
    } catch (err) {
        return next(err)
    }
});

module.exports = router;
