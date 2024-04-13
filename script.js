function updateLocator() {
    const now = new Date();
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };

    document.getElementById('date').textContent = now.toLocaleDateString('en-US', optionsDate);
    document.getElementById('time').textContent = now.toLocaleTimeString('en-US', optionsTime);

    document.getElementById('location').textContent = 'Location: Calgary, Canada';
}

setInterval(updateLocator, 1000);
updateLocator();

document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
  
  
