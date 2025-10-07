const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) { entry.target.classList.add('show'); }
  });
}, { threshold: 0.1 });
sections.forEach(sec => observer.observe(sec));
function toggleDarkMode(){ document.body.classList.toggle('dark-mode'); }
function unlockPremium(){ 
  alert('Thank you! Premium content unlocked.'); 
  const premium = document.getElementById('premiumContent');
  if(premium) premium.style.display = 'block';
}
function startMeditation(){
  const msg = new SpeechSynthesisUtterance("Close your eyes, breathe in, breathe out, and relax.");
  speechSynthesis.speak(msg);
}