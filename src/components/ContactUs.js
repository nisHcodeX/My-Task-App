import ContactUsForm from './ContactUsForm'
import {Link} from 'react-router-dom'
 
const ContactUs = () => {
    return (
        <div className='ContactUs'>

                <Link className="contactus-form-link" to='/ContactUsForm'>
                    <button className='btn btn-block'>
                        Contact Us
                    </button>
                </Link>
        </div>
    )
}

export default ContactUs
