import React, { useRef } from 'react';
import "./Contact.css";
import emailjs from 'emailjs-com';

//icons
import {HiOutlineMail} from 'react-icons/hi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
    const form = useRef();
 
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jbdbzn1', 'template_k8313l6', form.current, 'IVyxCM6c6cKN5jXpB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset() ;
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact-container'>
                <div className="contact-options">
                    <article className='contact-option'>
                        <HiOutlineMail className='icon'/>
                        <h4>Email</h4>
                        <h5>Kaiesmahmud@gmail.com</h5>
                        <a href="mailto:kaiesmahmud@gmail.com" target='_blank'>Send Mail</a>
                    </article>
                    <article className='contact-option'>
                        <FaFacebookMessenger className='icon'/>
                        <h4>Messenger</h4>
                        <h5>Kaies Mahmud Nehal</h5>
                        <a href="https://m.me/kaiesmahmud.nehal" target='_blank'>Send Message</a>
                    </article>
                    <article className='contact-option'>
                        <BsWhatsapp className='icon'/>
                        <h4>Whatsapp</h4>
                        <h5>01867074943</h5>
                        <a href="https://api.whatsapp.com/send?phone=+8801811765110" target='_blank'>Send Message</a>
                    </article>
                </div>
                {/* end of contact option  */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' required placeholder='Your Name' />
                    <input type="email" name='email' required placeholder='Your Email' />
                    <textarea name="message" id="textarea"  rows="8" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;