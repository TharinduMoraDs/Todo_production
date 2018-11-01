
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://178.128.96.45:27017/todo');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;


var router = express.Router();

var Task = require('./models/task');

router.use(function (req, res, next) {

    console.log('Something is happening.');
    next();
});


router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// POST Method
router.route('/task')

    .post(function (req, res) {

        var task = new Task();
        task.name = req.body.name;
        task.time = req.body.time;
        task.select = req.body.select;


        task.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Task created!' });
        });

    })

    // Get Method
    .get(function (req, res) {
        Task.find(function (err, task) {
            if (err)
                res.send(err);

            res.json(task);
        });
    });


router.route('/task/:task_id')
    // Get a task using object ID
    .get(function (req, res) {
        Task.findById(req.params.task_id, function (err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    })
    // Update a task 
    .put(function (req, res) {

        Task.findById(req.params.task_id, function (err, task) {

            if (err)
                res.send(err);

            task.name = req.body.name;

            task.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Task updated!' });
            });

        });
    })
    // delete a task 
    .delete(function (req, res) {
        Task.remove({
            _id: req.params.task_id
        }, function (err, task) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api', router);

app.listen(port);
console.log('Server Started port:' + port);