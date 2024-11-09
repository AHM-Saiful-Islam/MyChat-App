var express = require("express")
var bodyParser = require("body-parser")
const { Socket } = require("socket.io")
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')
const { error } = require("console")
const { send } = require("process")
var port = process.env.PORT || 5000

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var dbUrl = 'mongodb+srv://<connection link with mongo db>'

// mongoose model (name, schema)
var Message = mongoose.model('Message', {
    name: String,
    message: String
})


app.get('/messages', (req, res) => { // route and res and req
    Message.find({})
        .then(messages => {
            res.send(messages);
        })
        .catch(err => {
            res.status(500).send(err);
        });
})

// mongoose only work with promise
app.post('/messages', (req, res) => { // route and res and req
    var message = new Message(req.body)
    message.save()
        .then(() => {
            io.emit('message', req.body)
            res.sendStatus(200)
        })
        .catch((err) => {
            sendStatus(500)
        })
})

io.on('connection', (Socket) => {
    console.log(' user connected')
})

// mongoose is only work with promise
mongoose.connect(dbUrl)
    .then(() => {
        console.log('MongoDB connection is successful.')
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err)
    })


var server = http.listen(port, () => {

    console.log("Server is listening on port %d", port)

})
