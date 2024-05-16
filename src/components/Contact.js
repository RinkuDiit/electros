import React from 'react'

function Contact() {
  return (
    <div>
      <div style={{padding:'5%'}}>
      
        <div className='row'>
          <div style={{backgroundColor:'transparent'}} className='page_contact col-md-4 col-sm-12 col-xs-12'>
            <p className='h4'>Contact Us</p>
            <p>This is a great place to let your visitors know who you are. Add useful information that your users may find interesting.</p>
          </div>
          <div className='page_contact col-md-3 col-sm-12 col-xs-12'>
            <ul className='ulofcon'>
              <li className='h6'>Working Hours</li>
              <li>Weekdays : 8am to 8pm</li>
              <li>Weekend : 6am to 9pm  </li>
            </ul>
          </div>
          <div className='page_contact col-md-3 col-sm-12 col-xs-12'>
          
              <p className='h6'>Where are we?</p>
          
          
            <p>Kelley A. Fleming 196 Woodside Circle Mobile, FL 36602 Phone:240-256-1942</p>
          </div>
          <div className='page_contact col-md-2 col-sm-12 col-xs-12'>
            <p>Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265</p>
            
          </div>
         
        </div>

        <div className='row'>
          <div style={{marginTop:'1%'}} className='col-md-12 col-sm-12 col-xs-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d773462.234856681!2d-111.92048500000001!3d40.776608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1715821757742!5m2!1sen!2sus" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
        
        </div>
    </div>
  )
}

export default Contact