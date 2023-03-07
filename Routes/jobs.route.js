const express = require('express');
const { JobModel } = require('../Models/jobs.model');

const app = express.Router();
app.use(express.json());

app.get('/', async (req, res) => {
    try{
        const allJobs = await JobModel.find();
        if (allJobs.length!==0){
            res.status(200).send({message:'Available JObs', allJobs});
        } else {
            res.send({message:'No Jobs available'});
        }
    } catch (err) {
        res.status(400).send({message:'Opps!!! Soemthing went wrong', err});
    }
})

app.post('/', async (req,res) => {
    const payload = req.body;
    try{
        const job = new JobModel(payload);
        await job.save();
        res.status(201).send({message:'New Job created', job});
    } catch (err) {
        res.status(400).send({message:'Opps!!! Something went wrong', err});
    }
});

app.patch('/:id', async (req,res) => {
    const {id} = req.params;
    const payload = req.body;
    try{
        const job = await JobModel.findByIdAndUpdate({_id:id}, payload);
        res.status(204).send({message:`Job with id:- ${id} has been updated`});
    } catch (err) {
        res.status(400).send({message:'Opps!!! Something went wrong', err});
    }
})

app.delete('/:id', async (req,res) => {
    const {id} = req.params;
    try{
        const job = await JobModel.findByIdAndDelete({_id:id});
        res.status(202).send({message:`Job with id:- ${id} has been deleted`});
    } catch (err) {
        res.status(400).send({message:'Opps!!! Something went wrong', err});
    }
})

module.exports = app;