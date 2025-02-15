// Debounce functie om de prestaties te verbeteren
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", function() {
        dropdown.classList.toggle("active");  // Toggle de zichtbaarheid van de dropdown
    });
});


// Functie voor scroll-effecten
document.addEventListener("DOMContentLoaded", function() {
    console.log("Pagina geladen");

    // IntersectionObserver voor scroll-effecten
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });

    // Selecteer alle secties en observeer ze
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});


