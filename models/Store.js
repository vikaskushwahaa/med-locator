const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeId : {
        type : String,
        required: [true, "Please add store id"],
        unique : true,
        trim : true,
        maxlength: [10, "Store must be less than 10 chars"]

    },

    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    
    location: {
        type: {
          type: String,  
          enum: ['Point'],

        },
        coordinates: {
          type: [Number],
          index: '2sphere'
        },
        formettedAddress : String,
    },

    createdAt: {
        type: Date,
        defaulf: Date.now
    }
});



module.exports = mongoose.model('Store',StoreSchema);

