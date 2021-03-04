import React from 'react';
import SelectedBanner from '../../components/shared/SelectedBanner';
import './Contact.css';


const Contact = () => {
    return <>
    <SelectedBanner><h2 id="contact-title">CONTACT US</h2></SelectedBanner>
    <section className="contact-us">
        <form>
            <input type="text" placeholder="FULL NAME" className="contact-input"/>
            <input type="email" placeholder="E-MAIL" className="contact-input"/>
            <input type="number" placeholder="MOBILE"className="contact-input"/>
            <textarea name="message" placeholder="YOUR MESSAGE" />
            <button id="send" type="submit">Send</button>
        </form>
    </section>
    </>
};
export default Contact;