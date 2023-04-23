const express = require('express')
const students = require('./students')

const app = express()
app.listen(3000, () => {
  console.log('Listening on port 3000');
}}
           
           
app.get('/', (req, res) => {
  res.json({message: "API is working"});
}}

app.get('/api/students', (req, res) => {
  res.json(students)
}}
        
 app.post('/api/students', (req, res) => {
  console.log(req.body);
  res.send("students post request")
  
  
  student.push(user)
  res.json(user)
}}

app.put('/api/students/:id', (req,res) => {
   const id = req.params.id
   const first_name = req.body.first_name,
   const last_name = req.body.last_name,
   const email = req.body.email,
         
   const index = students.findIndex(student)=> {
      return(student.id ==id)
   }}
        
        if(index<0) {
  
       const std = students[index]
       std.last_name = last_name
       std.first_name = first_name
       std.email = email
       res.json(std)
} else {
    res.status(404)
}
  
  
