document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  if(!name || !email){
    alert('Please provide your name and email.');
    return;
  }
  alert('Thanks, ' + (name||'there') + '! We received your request and will be in touch soon.');
  this.reset();
});