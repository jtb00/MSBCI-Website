import React from 'react'
import './Contact.css'
import Footer from '../components/Footer/Footer'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a67fded9-8b00-4e97-95cc-8ca0ee74a46d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='section-header'>
        <h1>Get in Touch</h1>
      </div>
      <div className='cols'>
        <div className='col'>
          <ul>
            <li>Contact@MSBCI.com</li>
            <li>+1 703-754-3639</li>
            <li>6164 Michener Dr, <br />Haymarket, VA 20169</li>
          </ul>
        </div>
        <div className='col'>
          <div className='form'>
            <form onSubmit={onSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' placeholder='Name' required/>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' placeholder='Email' required/>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" placeholder='Phone Number' required/>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows='6' placeholder='Please enter your message'></textarea>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
