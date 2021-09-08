import {Link} from 'react-router-dom'

const ContactUsForm = () => {
     
    return (
        
        <form>
            <div className="form-control">
            <label className="contactus-form-label">Name</label>
            <input type="text" placeholder="Enter Your Name"/>
            </div>
            <div className="form-control">
            <label className="contactus-form-label">Email</label>
            <input type="email" placeholder="Enter Your Email "/>
            </div>
            <div className="form-control">
            <label className="contactus-form-label">Message</label>
            <textarea className="text-area-style" placeholder="Enter Your Message "/>
            </div>
            <Link to='/'>
            <input className='btn btn-block' type='submit' value='Send Message'/>
            </Link>
        </form>
    
    )
}

export default ContactUsForm
