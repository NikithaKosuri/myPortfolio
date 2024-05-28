/* MIXITUP  */

let mixerportfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/* ACTIVE LINK WORK */

const linkWork = document.querySelectorAll('.work_item')

function activework(){

    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener("click",activework))

/* POP UP  */

document.addEventListener("click",(e) => {
    if(e.target.classList.contains("work_button")) {
        toggleportfoliopopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function toggleportfoliopopup(){
    document.querySelector(".popup").classList.toggle("open");
}

document.querySelector(".popup-close").addEventListener("click",toggleportfoliopopup) 

function portfolioItemDetails(portfolioItem){
    document.querySelector(".popup-thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;


}

/* mail */

const contactForm = document.getElementById('contact-form'),
              contactMessage = document.getElementById('contact-msg');

        const sendEmail = (e) => {
            e.preventDefault();

            // Validate form before sending
            const name = document.getElementById('name');
            const mail = document.getElementById('mail');
            const message = document.getElementById('message');

            // Clear previous error messages
            contactMessage.textContent = '';
            contactMessage.classList.remove('error');

            // Define regex for email validation
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Validation flag
            let valid = true;

            // Validate name
            if (name.value.trim() === '') {
                contactMessage.textContent += 'Name is required. ';
                valid = false;
            }

            // Validate email
            if (mail.value.trim() === '') {
                contactMessage.textContent += 'Email is required. ';
                valid = false;
            } else if (!emailRegex.test(mail.value.trim())) {
                contactMessage.textContent += 'Email is not valid. ';
                valid = false;
            }

            // Validate message
            if (message.value.trim() === '') {
                contactMessage.textContent += 'Message is required. ';
                valid = false;
            }

            // If the form is not valid, prevent submission
            if (!valid) {
                contactMessage.classList.add('error');
                return; // Exit the function to prevent sending the email
            }

            // If the form is valid, send the email
            emailjs.sendForm('service_1pm9u2u', 'template_puf8g54', '#contact-form', 'b4B2BZmSKhLh2zdlp')
                .then(() => {
                    // Show sent message
                    contactMessage.textContent = 'Message sent successfully';

                    // Remove message displayed after 5 seconds
                    setTimeout(() => {
                        contactMessage.textContent = '';
                    }, 5000);

                    // Clear input fields
                    contactForm.reset();
                })
                .catch((error) => {
                    // Show error message
                    contactMessage.textContent = 'Failed to send message. Please try again later.';
                    contactMessage.classList.add('error');
            
                });
        };

        contactForm.addEventListener('submit', sendEmail);

/* theme light and dark mode */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark"))
        {
            dayNight.querySelector("i").classList.add("fa-sun");
        }
    else
        {
            dayNight.querySelector("i").classList.add("fa-moon");
        }
})

