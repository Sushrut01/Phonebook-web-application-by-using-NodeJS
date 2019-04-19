const express= require('express');
var route= express.Router();

const mongoose= require('mongoose');
const UsersRecord= mongoose.model('UsersRecord');

route.get('/', (req,res) => {
    res.render('index');
});

route.post('/', (req,res) => {
        insertRecord(req,res);
});

function insertRecord(req,res) {
    UsersRecord(req.body).save(function(err,doc) {
        if (err) throw err;
        res.redirect('/all_records');
    });
    
}

route.post('/update', (req,res) => {
        updateRecord(req,res);
});

function updateRecord(req,res) {
    UsersRecord.findOneAndUpdate({_id: req.body._id}, req.body, { new:true }, (err,doc) => {
        if (err) throw err;
        res.redirect('/all_records');
    });

}




route.get('/all_records', (req,res) => {
    UsersRecord.find((err,docs) => {
        if(!err) {
            res.render('allRecords', {
                getData:docs
            });
        }
        else {
            console.log('Error in retrieving:' +err);
        }
    });
});


route.get('/edit/:id', (req,res) => {
    UsersRecord.findById(req.params.id, (err,doc) => {
        if (!err) {
            res.render('edit', {
                singleData:doc
            });
        }
    });
});

route.get('/delete/:id', (req,res) => {
    UsersRecord.findByIdAndDelete(req.params.id, (err,doc) => {
        if(!err) {
            res.redirect('/all_records');
        }
        else {
            console.log('Error for deleting:' +err);
        }
    });
});






module.exports= route;