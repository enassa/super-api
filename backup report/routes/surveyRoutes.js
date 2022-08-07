const Surveys = require('../models/surveyModules')
const express = require('express')
const router = express.Router()

// GET SURVEYS
router.get('/surveys/:id', (req, res, next)=>{
    res.send({type:'GET'})
})
// ADD SURVEY
router.post('/surveys', (req, res, next)=>{
    // var survey = new Surveys(req.body)
    // survey.save()
    Surveys.create(req.body)
    .then((survey) => {
        res.send(survey)
    })
    .catch(next)
    // res.send({type:'POST',data:req.body})
})
// UPDATE SURVEY
router.put('/surveys/:id', (req, res, next)=>{
    res.send({type:'PUT'})
})

// DELETE SURVEY
router.delete('/surveys/:id', (req, res, next)=>{
    Surveys.findByIdAndRemove()
    res.send({type:'DELETE'})
})
module.exports = router;