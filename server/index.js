const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const dbUtils = require('../database/helpers.js')

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/public')))


//get request

//takes in a request and a response
app.get('/api', (req, res) => {
    console.log('I saw a request here!');
    //sends out response
    res.send("Success!");
})

//get route for ALL CHOICES
app.get('/app/main/', (req, res) => {
    dbUtils.getAll(((err, results) => {
        err ? res.send(err) : res.send(results)
    }))
})

//get route for specific restaurant
app.get('/app/main/:id', (req, res) => {
    console.log(req.params)
    var { id } = req.params;
    
})
//get route to return a specific restaurant
//post to submit a post request with just "restaurant" in the body 
app.post('/app/main', (req, res) => {
    dbUtils.addOne(req.body, (err, results) => {
        err ? res.send(err) : res.send(results)
    })
})

//delete routes for deleting specific restaurants
app.delete('/app/main', (req, res) => {
    dbUtils.deleteOne(req.body, (err, results) => {
        err ? res.send(err) : res.send(results)
    })
})

//listen for specific requests"
app.listen(PORT, (err) => {
    console.log(err ? err: `Listening on ${PORT}`)
}) 