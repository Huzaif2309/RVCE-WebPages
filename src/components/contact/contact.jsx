import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import insta from '../../assets/instagram.png'
import white_arrow from '../../assets/white-arrow.png'

const contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "544a337f-8f52-4013-969a-6b2f56e6ad99");

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
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Welcome to our contact section! We're delighted that you're interested in reaching out to us. Whether you have questions about our products or services, want to collaborate on a project, or simply want to say hello, we're here to listen and assist you.Our dedicated team is committed to providing excellent customer support and ensuring your experience with us is positive and fulfilling. Feel free to contact us through any of the channels listed below:</p>
            <ul>
                <li><img src={phone_icon} alt="" />Phone: 8296301490</li>
                <li><img src={mail_icon} alt="" />Email: mhuzaif427@gmail.com</li>
                <li><img src={location_icon} alt="" />Address: RVCE Banglore</li>
                <li><img src={insta} alt="" />Social Media: Connect with us on Instagram</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number'required />
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default contact