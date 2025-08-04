import React from 'react'
import Contact from '../components/contact'

function ContactPage() {
  return (
    <>
      <div className='bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 px-8'>
        <div className='container mx-auto py-7'>
            <h1 className='text-4xl text-white font-semibold '>Contact us</h1>
        </div>
      </div>
      
      <Contact />
     
      <div className='container mx-auto mb-16'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4176.669122522032!2d79.11228158982915!3d21.152831422918656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753873076675!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    </>
  );
}

export default ContactPage;
