import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'



function App() {
// toggle Button
 const [showAddTask,setShowAddTask] = useState (false)

 const [tasks,setTasks] = useState([])
      useEffect(()=>{
        const getTasks = async () => {
        const tasksFromServer= await fetchTasks()
        setTasks(tasksFromServer)
      }
        getTasks()
      },[])
  // Fetch Tasks
  const fetchTasks= async ()=>{
    const res = await fetch(`http://localhost:5000/tasks/`)
    const data = await res.json()
    return data
  }
    // Fetch Task

      const fetchTask= async (id)=>{
      const res = await fetch(`http://localhost:5000/tasks${id}`)
      const data = await res.json()
  
      return data
    }
// Add Task
   const addTask =async (task) =>{
    const res = await fetch('http://localhost:5000/tasks',{
      method : 'POST',
      headers : {
        'Content-type':'application/json'
      },
      body : JSON.stringify(task)
    })
    
    const data = await res.json()
    setTasks([...tasks, data])

      // const id = Math.floor(Math.random()*10000)+1
      // const newTask = {id,...task}
      // setTasks(
      //   [...tasks,newTask]
      // )

   }
// Delete Event 
    const deleteTask =async (id) =>{
     await fetch(`http://localhost:5000/tasks/${id}`,{
      method : 'DELETE'
     })

        setTasks(
          tasks.filter(tasks =>(
            tasks.id !== id
          ))
        )
    }
// Toggle Event
    const toggleTask =async (id) =>{
        const taskToToggle = await fetchTask(id)
        const updTask ={...taskToToggle,
          reminder : !taskToToggle.reminder}

      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
          method : 'PUT',
          headers:{
            'Content-type':'application/json'
          },
          body : JSON.stringify(updTask)
      })
       const data = await res.json()
      setTasks( 
        tasks.map((task)=> task.id === id ? 
        {...task, reminder:
           !task.reminder}
        : task
      )
    )
    }
  return (
    <div className="container">
    <Header 
    onAdd={()=>setShowAddTask(!showAddTask)}
    showAddTask = {showAddTask}
    />
    {showAddTask &&  <AddTask
      onAdd={addTask}
    />}
    {tasks.length >0 ? 
        ( <Tasks tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleTask}
          />):
        ('No Task to Preview')}
    </div>
  );
}

export default App;
