import {useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText] =useState('')
    const [day,setDay] =useState('')
    const [reminder,setReminder] =useState(false)

    const onSubmit =(e)=>{
        e.preventDefault()
        
        if(!text){
            alert('add task')
            return
        }
        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Add Task</label>
                <input type='text'
                 placeholder='Type Task Here'
                 value={text}
                 onChange={(e)=>setText(e.target.value)}
                />
            </div> 
            <div className='form-control'>
                <label>Add Day & Time</label>
                <input type='text'
                 placeholder='Type Day & Time Here'
                 value={day}
                 onChange={(e)=>setDay(e.target.value)}
                 />
            </div> 
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                value={reminder}
                checked={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)}
                />
            </div> 
            <input className='btn btn-block' type='submit' value='Save Task'/>
        </form>
    )
}

export default AddTask
