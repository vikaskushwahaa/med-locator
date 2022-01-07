const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder')


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
        formattedAddress : String,
    },

    createdAt: {
        type: Date,
        defaulf: Date.now
    },


});


//geocode and create location
StoreSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address);
    console.log(loc);
} );



module.exports = mongoose.model('Store',StoreSchema);