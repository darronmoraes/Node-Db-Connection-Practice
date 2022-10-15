
/*
    
    // To fetch data
    connect.query("select * from college.student", function(error, result) {
        if (error) {
            throw error;
        } else {
            console.log(result);
        }
    });
*/


1. to POST
let sql = "INSERT INTO student(fullname, email, mobile) VALUES('"+ name +"', '"+ email +"', '"+ contact +"')";
    con.query(sql, [name, email, contact], (error, result) => {
            if (error) throw error;
            res.send('student registered');
        });

2. to POST
let sql = "INSERT INTO student(fullname, email, mobile) VALUES(?, ?, ?)";
    con.query(sql, [name, email, contact], (error, result) => {
        if (error) throw error;
        res.send('student registered');
    });

3. to POST
let sql = "INSERT INTO student(fullname, email, mobile) VALUES ?";
let data = [
    [name, email, contact]
]
        
    con.query(sql, [data], (error, result) => {
        if (error) throw error;
        res.send('student registered');
    });