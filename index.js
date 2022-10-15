const con = require('./connection');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const { application } = require('express');

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>  {
    res.sendFile(__dirname + '/register.html');
});

// POST data.
app.post('/', (req, res) => {
    //console.log(req.body);
    let firstname = req.body.first_name;
    let lastname = req.body.last_name;
    let email = req.body.email;
    let contact = req.body.contact;

    con.connect((error) => {
        if (error) throw error;
        let sql = "INSERT INTO student(firstname, lastname, email, mobile) VALUES ?";
        let data = [
            [firstname, lastname, email, contact]
        ]
        con.query(sql, [data], (error, result) => {
            if (error) throw error;
            //res.send('student registered');
            //redirect to a route
            res.redirect('/students');
        });
    });
});

app.get('/students', (req, res) => {
    con.connect((error) => {
        if (error) console.log(error);
        let sql = "SELECT * FROM student";
        con.query(sql, (error, result) => {
            if (error) throw error;
            res.render(__dirname + '/students', {students: result});
        });
    });
});

app.listen(3000);