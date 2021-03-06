import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks/Tasks'
import AddTask from './components/Tasks/AddTask'
import ContactUs from './components/contactUs/ContactUs'
import ContactUsForm from './components/contactUs/ContactUsForm'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  // toggle Button
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])
  // const [contact,setcontact] =useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  // Fetch Tasks
  const fetchTasks = async () => {
      const res = await fetch(`http://localhost:5000/tasks/`)
      const data = await res.json()
    return data
  }
  // Fetch Task

  const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
    return data
  }
  // Add Task
  const addTask = async (task) => {
    console.log('this is task')
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
                 'Content-type': 'application/json'
               },
      body: JSON.stringify(task)
    })
    const data = await res.json()

    setTasks([...tasks, data])
  }
  // Add Contact
  const contactUsForm = async (contact) => {
    const res = await fetch('http://localhost:5000/contact', {
      method : 'POST',
      headers : {
                   'Content-type' : 'application/json'
                },
      body : JSON.stringify(contact)
    })
  }
  // Delete Event 
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    // control response status
    res.status === 200 ?
      setTasks(
        tasks.filter(tasks => tasks.id !== id)
      ) : alert('Error Deleting the task')
  }
  // Toggle Event
  const toggleTask = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
                  'Content-type': 'application/json'
               },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()

    setTasks(
      tasks.map((task) => task.id === id ?
        { ...task, reminder: data.reminder }
        : task
      )
    )
  }
  return (

    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ?
                  (<Tasks tasks={tasks}
                      onDelete={deleteTask}
                      onToggle={toggleTask}
                      />) :
                  ('No Task to Preview')}
          <ContactUs />
          </>
        )} />
        <Route path='/ContactUsForm'>
          <ContactUsForm contact={contactUsForm} />
        </Route>
        <Route path='/About' component={About} />
        <Footer className='footer' />
      </div>
    </Router>
  )
}

export default App;
