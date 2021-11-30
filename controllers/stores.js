const Store = require('../models/Store');


//@desc Get all stores
// routes GET /api/stores
// @access public

exports.getStore = async (req, res, next) => {
    try {
        const stores = await Store.find();

        res.status(200).json({
            success: true,
            count: stores.length,
            data: stores
        });
    } catch (err) {
        console.log(err);
        res.status(500).josn({ error: 'Server error' });
    }
};



//@desc Create a store
// routes POST /api/stores
// @access public

exports.addStore = async (req, res, next) => {
    try {
        const store = await Store.create(req.body);

        res.status(200).json({
            success: true,
            data: store,
        });
    } catch (err) {
        console.log(err);
        //res.status(500).josn({error: 'Server error'});
        if (err.code) {
            return res.status(400).json(
                { error: 'this stores already exists' }
            );
        }

        res.status(500).josn({ error: 'Server error' });


    }
};