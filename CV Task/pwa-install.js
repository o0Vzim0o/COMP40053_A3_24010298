let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Hide the install button by default
installBtn.style.display = 'none';

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Stop automatic prompt
  deferredPrompt = e;
  installBtn.style.display = 'inline-block'; // Show the button
});

// On click, show the install prompt
installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      installBtn.style.display = 'none'; // Hide button once installed
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt = null;
  }
});
