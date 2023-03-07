const {Schema, model} = require('mongoose');

const jobSchema = Schema({
    name:{type:String, required:true},
    position:{type:String, required:true},
    contract:{type:String, required:true},
    location:{type:String, required:true},
}, {
    versionKey:false,
    timestamps:{
        createdAt:'created_at'
    }
});

const JobModel = model('job', jobSchema);

module.exports = {
    JobModel,
};