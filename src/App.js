import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'



function App() {
  const [tasks,setTasks] = useState(
    [
       {
           id : 1,
           text : 'Doctors Appoinment',
           day :'Feb 5th at 2:30pm',
           reminder: true,
       },
       {
           id : 2,
           text : 'Meeting at School',
           day :'Feb 6th at 1:30pm',
           reminder: true,
           
       },
       {
           id : 3,
           text : 'Food Shopping',
           day :'Feb 5th at 2:30pm',
           reminder: false,
       },
   ]
)
// Add Task
   const addTask =(task) =>{
      console.log(task)
   }
// Delete Event 
    const deleteTask =(id) =>{
        setTasks(
          tasks.filter(tasks =>(
            tasks.id !== id
          ))
        )
    }
// Toggle Event
    const toggleTask =(id) =>{
      setTasks(
        tasks.map((task)=> task.id === id ? 
        {...task, reminder: !task.reminder}
        : task
      )
    )
    }
  return (
    <div className="container">
    <Header/>
    <AddTask
      onAdd={addTask}
    />
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
