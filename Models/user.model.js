const {Schema, model} = require('mongoose');

const userSchema = Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    admin:{type:Boolean, default:false,},
}, {
    versionKey:false,
});

const UserModel = model('user', userSchema);

module.exports = {
    UserModel,
};