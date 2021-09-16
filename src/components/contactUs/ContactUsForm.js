import {useState} from 'react'
import {Link} from 'react-router-dom'

const ContactUsForm = ({contact}) => {

    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
  
    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text || !email || !msg) {
            alert('plese fill')
            return
        }

        contact({text,email,msg})
        setText('')
        setEmail('')
        setMsg('')
  }
    return (
        <div>
        <form onSubmit ={onSubmit}>
            <div className="form-control">
                <label className="contactus-form-label">Name</label>
                <input type="text" 
                        placeholder="Enter Your Name"
                        value={text}
                        onChange={(e)=> setText(e.currentTarget.value)}
                 />
            </div>
            <div className="form-control">
                <label className="contactus-form-label">Email</label>
                <input type="text" 
                       placeholder="Enter Your Email "
                       value={email}
                       onChange={(e)=> setEmail(e.currentTarget.value)}
                 />
            </div>
            <div className="form-control">
                <label className="contactus-form-label">Message</label>
                <textarea className="text-area-style" 
                          placeholder="Enter Your Message" 
                          value={msg}
                          onChange={(e)=> setMsg(e.currentTarget.value)}
                />
            </div>
                <input className='btn btn-block' type='submit' value='Send Message'/>
        </form>
        <Link to='/'>
        <button className='btn btn-block'> Go Back </button>
        </Link>
        </div>
    )
}

export default ContactUsForm
