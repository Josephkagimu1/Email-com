import { useState } from 'react';
import emailjs from 'emailjs-com';
import Card from './Card';

const Mailer = () => {

    const[ active, setActive ] = useState("false");

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_f38r85j', 'template_fnalaln',
        e.target, "user_nGPqSzoWYlmQPCVPejEAd"
        ).then(res =>{
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className="container border" style={{marginTop:"50px", width:"50%", 
        backgroundPosition:'center',
        backgroundSize: "cover"}}>
            <h1 style={{marginTop:'25px'}}>Contact Form</h1>
            <form 
            className="row" 
            style={{margin:"25px 25px 25px 20px"}}
            onSubmit={sendEmail}
            >
                <label>name</label>
                <input type="text" name="name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label>Message</label>
                <textarea name="message" rows='4' className="form-control" />

                <input type="submit" value="send" onClick={() => setActive("Card")} className="form-control btn btn-primary"
                style={{marginTop:"30px"}} />

                <div className="row padding">
                {active === "Card" ? <Card /> : null}
                </div>

            </form>
        </div>
    )
}

export default Mailer;
