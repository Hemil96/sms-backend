const mongoose = require('mongoose');


var signUpSchema = new mongoose.Schema({
    firstName:          {type: String, required: true},
    lastName:           {type: String, required: true},
    email:              {type: String, required: true},
    password:           {type: String, required: true},
    birthdate:          {type: Date, required: true},
    flatePurchaseDate:  {type: Date, required: true},
    profilePhoto:       {type: String, required: true},
    flateBlock:         {type: String, required: true},
    flateNumber:        {type: String, required: true},
    mobileNumber:       {type: Number, required: true},
    isRepresentative:   {type: Boolean, default: false}
    
});

module.exports = mongoose.model('SignUp', signUpSchema);