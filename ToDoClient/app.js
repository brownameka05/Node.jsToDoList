

const ALL_TASKS_URL = "http://localhost:3000/"
const ADD_NEW_TASK_URL = "http://localhost:3000/tasks"

let titleTextBox = document.getElementById("titleTextBox")
let priorityTextBox = document.getElementById("priorityTextBox")
let btnAddTask = document.getElementById("btnAddTask")

let taskList = document.getElementById("taskList")

btnAddTask.addEventListener('click', function(){
  let title = titleTextBox.value
  let priority = priorityTextBox.value

  saveTask({title : title, priority : priority})

})

function saveTask(task){
  console.log(task)
  console.log(JSON.stringify(task))

  fetch(ADD_NEW_TASK_URL,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(task)
  }).then(function(response){
    fetchAllTasks()
  })

}

function displayTasks(tasks){
  let taskItems = tasks.map((task)=>{
    return `
    <li> ${task.title} ${task.priority}

    </li>`
  })
  taskList.innerHTML = taskItems.join('')
}



function fetchAllTasks(){
  fetch(ALL_TASKS_URL)
  .then(function(response){
    return response.json()
  }).then(function(tasks){
    displayTasks(tasks)
  })
}



fetchAllTasks()









// fetch("http://localhost:3000/tasks")
// .then(function(response){
//   return response.json()
// }).then(function(tasks){
//   // console.log(tasks)
//   listUpdate(tasks)
// })
//
//
// function listUpdate(tasks){
//   let taskItems = tasks.map(function(task){
//     return`<li>
//     <label> ${task.title}<label>
//     <img id="taskimg" src="${task.imageurl}"/>
//     </li<
//     `
//   })
//   // console.log("listUpdate")
//   taskList.innerHTML = taskItems.join('')
//
// }




// __________this function to post on html page list__________
// function updateUI(vacations){
//   let vacations = vacations.map(function(vacation){
//     return `<li>
//     <label> ${vacation.title}<label>
//     <img src="${vacation.url}"/>
//     </li>
//     `
//   )}
// }
