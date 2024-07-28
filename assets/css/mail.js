const contactForm = document.getElementById('contact-form'),
         contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) =>{
      e.preventDefault()

      //serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_l853pgm','template_xzy86m7','#contact-form','0C19af5t9_qNmpC0-')
      .then(() => {
        //show sent message
        contactMessage.textContent = 'Message sent Successfully ✅'

        // Remove Message After 5 seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        },5000)
      })
    }

    contactForm.addEventListener('submit',sendEmail)