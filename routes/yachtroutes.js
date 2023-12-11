const express = require('express')
const yachtroutes = express.Router()
const Yacht = require('../models/yachtschema');

const multer = require('multer');




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });



// Add Employee
// employeeRouter.post('/add-employee', upload.single('image'), (req, res) => {


yachtroutes.post('/add', upload.single('image'), (req, res) => {
    const Data = new Yacht({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        phone: req.body.phone,
        time: req.body.time,
// image:req.body.image,
        // createdAt: req.body.createdAt,
        image: req.file.filename,
    });

    Data.save()
        .then((data) => {
            res.redirect('/api/yacht/view')
            // res.render('history')
            // res.send(data);
            //   res.status(200).json({
            //     success: true,
            //     error: false,
            //     data: data,
            //   });
        })
        .catch((err) => console.log(err));
});

//edit


yachtroutes.get('/edit/:id', (req, res) => {
    Yacht.findOne({
        _id: req.params.id,
    })
        .then((data) => {

            res.render('edit', { data })
            // res.send(data);

            //     // res.status(200).json({
            //     //     success: true,
            //     //     error: false,
            //     //     data: data,
            //     // });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                error: true,
                message: 'error',
            })
        });


});


// view employee

yachtroutes.get('/view', (req, res) => {
    Yacht.find()
        .then((data) => {
            res.render('history', { detail: data })

            // res.send(data);
            // res.status(200).json({
            //     success: true,
            //     error: false,
            //     document: data, // data
            // });
        })
        .catch((err) => console.log(err));
});

// view single employee

yachtroutes.get('/view/:id', (req, res) => {
    Yacht.findOne({
        _id: req.params.id,
    })
        .then((data) => {

            res.render('viewone', { data })
            // res.send(data);

            //     // res.status(200).json({
            //     //     success: true,
            //     //     error: false,
            //     //     data: data,
            //     // });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                error: true,
                message: 'error',
            })
        });


});

// update employee
// employeeRouter.put('/update-employee/:id',upload.single('image'),(req, res) => {


yachtroutes.post('/update/:id',upload.single('image'), (req, res) => {
    Yacht.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            data.name = req.body.name,
                data.location = req.body.location,
                data.email = req.body.email,
                data.phone = req.body.phone,
                data.time = req.body.time,
                // data.image = req.body.image,
                data.image = req.file.filename,

                data.save()
                    .then((data) => {
                        res.redirect('/api/yacht/view')
                        // res.status(200).json({
                        //     success: true,
                        //     error: false,
                        //     data: data,
                        //     message: 'updated successfully',
                        // });
                    })
                    .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
});

//  delete employee
yachtroutes.get('/delete/:id', (req, res) => {
    Yacht.deleteOne({
        _id: req.params.id,
    })
        .then(() => {
            res.redirect('/api/yacht/view')
            // res.status(200).json({
            //     success: true,
            //     error: false,
            //     message: 'Deleted successfully',
            // });
        })
        .catch((err) => console.log('Some error Happened'));
});


module.exports = yachtroutes