import ContactUsForm from './ContactUsForm'
import {Link, useLocation} from 'react-router-dom'
const ContactUs = () => {
    const location = useLocation()
    return (
        <div>
            <Link className="contactus-form-link" to='/ContactUsForm'>
            <button className='btn btn-block'> 
                Contact Us
            </button>
             </Link>
            {
                location.pathname === '/ContactUsForm' && <ContactUsForm/>
            }
        </div>
    )
}

export default ContactUs
