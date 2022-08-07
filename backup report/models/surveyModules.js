const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SurveySchema = new Schema({
    id:{type:Number},
    title:{
        type:String,
        required:[true, 'Title is required'],
    },
    titleImage:{
        type:String,
        required:[true, 'Title is required'],
    },
    description:{
        type:String,
        required:[true, 'Description is required'],
    },
    url:{
        type:String,
        required:[true, 'url is required'],
    },
    answerMoreThanOnce:{
        type:Boolean,
        required:[true, ' is required'],
        default:false,
    },
    settings:{
        type:Object,
        required:[true, ' is required'],
    },
    dateCreated:{
        type:String,
        required:[true, ' is required'],
    },
    responses:{
        type:Array,
        required:[true, ' is required'],
    },
    numberOfRespones:{
        type:Number,
        required:[true, ' is required'],
    },
    numberOfQuestions:{
        type:Number,
        required:[true, ' is required'],
    },
    requireAccount:{
        type:Boolean,
        required:[true, ' is required'],
        default:false,
    },
})
const Surveys = mongoose.model('survey', SurveySchema)
module.exports = Surveys