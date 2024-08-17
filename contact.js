document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const loading = document.querySelector('.loading');
      const errorMessage = document.querySelector('.error-message');
      const sentMessage = document.querySelector('.sent-message');
  
      loading.style.display = 'block';
      errorMessage.style.display = 'none';
      sentMessage.style.display = 'none';
  
      const serviceID = 'service_va0274i';
      const templateID = 'template_k47fjqq';
  
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          loading.style.display = 'none';
          sentMessage.style.display = 'block';
        }, (err) => {
          loading.style.display = 'none';
          errorMessage.style.display = 'block';
          errorMessage.textContent = `Error: ${JSON.stringify(err)}`;
        });
    });
  });
  