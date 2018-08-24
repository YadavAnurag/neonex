var Questions = require('./userModel');
var _ = require('lodash');

exports.params = function(req, res, next, id){
    Questions.findById(id)
        .exec()
        .then(function(question){
            if(!question){
                res.json('No question with provided id');
            }else{
                req.question = question;
                next();
            }
        });
};

exports.get = function(req, res, next){
    Questions.find({})
        .exec()
        .then(function(questions){
            res.json(questions);
        }, function(err){
            res.json('Does not found something '+ err);
        });
};

exports.getOne = function(req, res, next){
    var question = req.question;
    res.json(question);
};

exports.put = function(req, res, next){
    var question = req.question;
    var updateQuestion = req.body;
    _.merge(question, updateQuestion);
    question.save(function(err, saved){
        if(err){
            res.json('Error while saving data');
        }else{
            res.json(saved);
        }
    });
};

exports.post = function(req, res, next){
    var newQuestion = new Questions(req.body);
    newQuestion.save(function(err, saved){
        if(err){
            res.json(err);
        }else{
            res.json(newQuestion);
        }
    });
};

exports.delete = function(req, res, next){
    req.question.remove(function(err, removed){
        if(err){
            res.json(err);
        }else{
            res.json(removed);
        }

    });
};