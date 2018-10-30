
const express= require('express')
const app = express()
const port= 3000
var bodyParser = require('body-parser')
const Task = require('./task')

let tasks = []

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});







// -------------------POST------------------

app.post("/tasks",(req,res)=>{
  let title = req.body.title
  let priority = req.body.priority

  let task = new Task (title,priority)
  tasks.push(task)
  console.log(tasks)
  res.send(tasks)

})




// -----------------GET------------------------

app.get("/", function(req,res){
  // let task1 = new Task ("Wash Car", "high")
  // let task2 = new Task ("Wash Dog", "Low")
  // let tasks = [task1,task2]

  res.json(tasks)

})








// app.post("/tasks", function(req,res){
//   console.log(req.body.title)
//   console.log(req.body.imageURL)
//
//   let task = new Task(req.body.title)
//
//   tasks.push(task)
//
//   res.send("Posting")
// })




// app.get("/tasks", function(req,res){
//
//   let tasks = [{title: "Wash Dog", url : "https://www.costarica.com/contentAsset/image/f989844e-960c-4cca-b9c2-87638dc2d18c/fileAsset/filter/Resize,Jpeg/resize_w/1000/Jpeg_q/x.8.pagespeed.ic.aU8XGzsoQJ.jpg"} ,{title: "Buy Water"}]
//
//   // res.send(tasks)
//   res.json(tasks)
// })




// __________vacation Example------------
// app.get("/vacations", function(req,res){
//
//   let vacations = [{title: "Costa Rica"} ,{title: "Boston"}]
//
//   res.send(vacations)
//   res.json(vacations)
//
// })
// _____localhost:4000/vacations------------



// -------example blank is root server------
// app.get("/", function(req,res){
//   res.send('Hello World')
// })



// ---------example------------
// app.get('/todolist', (req, res)=>{
//   console.log(req)
//   res.send("WORKED")
// })




// _____starts the server /node .js
app.listen(port,function(){
  console.log(`Listening on port ${port}`)
})
