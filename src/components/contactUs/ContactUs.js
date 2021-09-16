import ContactUsButton from './contactUsButton'

import {Link} from 'react-router-dom'
 
const ContactUs = () => {
    return (
        <div className='ContactUs'>

                <Link className="contactus-form-link" to='/ContactUsForm'>
                    <ContactUsButton/>
                </Link>
            
        </div>
    )
}

export default ContactUs
