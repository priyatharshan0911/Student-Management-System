import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Starting the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

let Students = [{

    "Id": 10001,
    "Firstname":  "Reshonish",
    "Lastname": "Premnath",
    "Email": "nitishe@gmail.com",
    "City": "Colombo",
    "Course":"Diploma", 
    "Guardian": "Mr.Johnson",
    "Subject":"OOP"
},
{
    "Id": 10002,
    "Firstname":  "Ramanayak",
    "Lastname": "Pranavin",
    "Email": "manav@gmail.com",
    "City": "Matara",
    "Course":"Foundation", 
    "Guardian": "Mr.Roy Everton",
    "Subject":"ETF"

},
{
    "Id": 10003,
    "Firstname":  "Hrithickroshan",
    "Lastname": "Chandra",
    "Email": "shamini@gmail.com",
    "City": "Jaffna",
    "Course":"Degree", 
    "Guardian": "Mr.Avanka ",
    "Subject":"WAD"

}


];
let student = { "Id": '', "Firstname": "", "Lastname": "", "Email": "", "City": "", "Course":"","Subject":""};

//retrive students
app.get("/Students", (req, res) => {
    res.json(Students);
});




app.get("/Students/Id=:Id", (req, res) => {
    let sId = parseInt(req.params.Id);
    let tempStu = Students.filter((x) => x.Id == sId)[0];
    if (tempStu) {
        res.json(tempStu);
    }
    else {
        res.sendStatus(404);
    }
});

app.get("/Students/Firstname=:Firstname", (req, res) => {
    let sFirstname = req.params.Firstname;
    let tempStu = Students.filter((x) => x.Firstname == sFirstname)[0];
    if (tempStu) {
        res.json(tempStu);
    }
    else {
        res.sendStatus(404);
    }
});

app.get("/Students/Lastname=:Lastname", (req, res) => {
    let sLastname = req.params.Lastname;
    let tempStu = Students.filter((x) => x.Lastname == sLastname)[0];
    if (tempStu) {
        res.json(tempStu);
    }
    else {
        res.sendStatus(404);
    }
});
app.get("/Students/Email=:Email", (req, res) => {
    let sEmail = req.params.Email;
    let tempStu = Students.filter((x) => x.Email == sEmail)[0];
    if (tempStu) {
        res.json(tempStu);
    }
    else {
        res.sendStatus(404);
    }
});

app.get("/Students/City=:City", (req, res) => {
    let sCity = req.params.City;
    let tempStu = Students.filter((x) => x.City == sCity)[0];
    if (tempStu) {
        res.json(tempStu);
    }
    else {
        res.sendStatus(404);
    }
});

app.get("/Students/Course=:Course", (req, res) => {
    let sCourse = req.params.Course;
    let tempStu = Students.filter((x) => x.Course == sCourse)[0];
    if (tempStu) {
        res.json(tempStu);
    }
    else {
        res.sendStatus(404);
    }
});

app.get("/Students/Guardian=:Guardian", (req, res) => {
    let sGuardian = (req.params.Guardian);
    let tempStu = Students.filter((x) => x.Guardian == sGuardian)[0];
    if (tempStu) {
        res.json(tempStu);
    }
    else {
        res.sendStatus(404);
    }
});

app.get("/Students/Subject=:Subject", (req, res) => {
    let sSubject = (req.params.Subject);
    let tempStu = Students.filter((x) => x.Subject == sSubject)[0];
    if (tempStu) {
        res.json(tempStu);
    }
    else {
        res.sendStatus(404);
    }
});


//insert student
app.post("/student", (req, res) => {
    student = req.body;
    Students.push(student);
    res.send('Student is added to the list');
});

//Update Student
app.put("/Students/:Id", (req, res) => {
    let sId = parseInt(req.params.Id);
    let stu = req.body;
    let tempStu = Students.filter((x) => x.Id == sId)[0];
    if (tempStu) {
        tempStu.Id = stu.Id;
        tempStu.Firstname = stu.Firstname;
        tempStu.Lastname = stu.Lastname;
        tempStu.Email = stu.Email;
        tempStu.City = stu.City;
        tempStu.Course = stu.Course;
        tempStu.Guardian = stu.Guardian;
        tempStu.Subject = stu.Subject;
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});

//delete students
app.delete("/Students/:Id", (req, res) => {
    let studentId = parseInt(req.params.Id);
    let currentStudent = Students.filter((x) => x.Id == studentId)[0];
    if (currentStudent) {
        Students = Students.filter((x) => x.Id !== studentId);
        res.statusMessage = "Student has been deleted .";
        res.sendStatus(200);
    } else {
        res.statusMessage = "Student is unavailable ";
        res.sendStatus(404);
    }
});

