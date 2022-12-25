import React, { useState } from 'react'
import Title from '../generic-components/Title'

function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onFormElementChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value
    switch (event.target.name) {
      case "name": setName(newValue); break;
      case "email": setEmail(newValue); break;
      case "message": setMessage(newValue); break;
      default: throw new Error('Form element does not have a name !')
    }
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const submitForm = () => {
    window.open(`mailto:snavaneetharan@gmail.com?subject=${name+" here, let's connect"}&body=${encodeURIComponent(message+"\nHere's my email "+email+".")}`)
    resetForm();
  }

  return (
    <section id="contact">
      <Title title="Feel free to reach out" />
      <div id="contactForm" className="xs:w-[90%] sm:w-[60%] m-auto card-shadow p-4">
        <input name="name" type="text" placeholder="Name" className="w-full p-2 outline-none my-2 bg-accent1 border-2 focus:border-primary" value={name}
          onChange={onFormElementChange} />
        <input name="email" type="email" placeholder="Email" className="w-full p-2 outline-none my-2 bg-accent1 border-2 focus:border-primary" value={email}
          onChange={onFormElementChange} />
        <textarea name="message" className="bg-accent1 border-2 focus:border-primary w-full my-2 p-2 outline-none" placeholder="Message" rows={10}
          value={message} onChange={onFormElementChange} />

        <button type="button" className="text-primary hover:text-white border border-primary 
hover:bg-primary focus:ring-4 focus:outline-none focus:ring-red-300 font-medium 
rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:border-slate-500 disabled:text-slate-500
disabled:hover:bg-white"
disabled={name.length ===0 || email.length===0 || message.length === 0}
onClick={submitForm}>Submit</button>
      </div>
    </section>
  )
}


export default Contact;