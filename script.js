document.getElementById('explore-btn').addEventListener('click', function () {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('learn-more-btn').addEventListener('click', function () {
    document.getElementById('why-cocojag').scrollIntoView({ behavior: 'smooth' });
});

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                contactForm.reset();
                formSuccess.classList.add('visible');
            } else {
                alert('Something went wrong. Please try again or email us directly at hello@trugrinn.com.');
            }
        })
        .catch(() => {
            alert('Something went wrong. Please try again or email us directly at hello@trugrinn.com.');
        });
});