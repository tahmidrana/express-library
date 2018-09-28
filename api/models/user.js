var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        lowercase: true
    }
});

//this will run just before saving new record (hook)
UserSchema.pre('save', function (next) {
    var user = this;
    //console.log(user.password);
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            next(err);
        }
        user.password = hash;
        next();
    });
});

var User = mongoose.model("User", UserSchema);
module.exports = User;