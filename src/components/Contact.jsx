import React from 'react'

function Contact() {
  return (
   <div className="contact">
    <main>
        <h1>Contact Us</h1>
        <form action="">
            <div>
                <label>Name</label>
                <input type="text" placeholder='Abc' required/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder='abc@gmail.com' required/>
            </div>
            <div>
                <label>Message</label>
                <input type="text" placeholder='Tell us about your query...' required/>
            </div>
            
            <button type="submit">Send</button>
        </form>
    </main>
   </div>
  )
}

export default Contact