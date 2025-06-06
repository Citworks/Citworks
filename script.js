document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Text Animation
    const animatedText = document.getElementById("animated-text");
    let words = ["Caring", "Compassionate", "Dedicated"];
    let index = 0;
    setInterval(() => {
        animatedText.innerHTML = `Welcome to <span class="highlight">${words[index]}</span> Happy Paws`;
        index = (index + 1) % words.length;
    }, 2500);

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        if (name && validateEmail(email) && message) {
            formMessage.innerHTML = `<div class="message-box">
                                        <p>✅ <strong>Thank you, ${name}, for testing this website!</strong></p>
                                        <p>Your email: <strong>${email}</strong></p>
                                        <p>Your message: <em>${message}</em></p>
                                        <p>We appreciate you testing this small function.</p>
                                    </div>`;
            contactForm.reset();
        } else {
            formMessage.innerHTML = `<div class="message-box error">
                                        <p>❌ Please fill out all fields correctly.</p>
                                    </div>`;
        }
    });
});
