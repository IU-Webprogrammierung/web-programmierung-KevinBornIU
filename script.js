// Setzt Background auf "no scroll" sobald das Burgermenu sich öffnet

document.addEventListener('DOMContentLoaded', () => {
    const navigationCheckbox = document.getElementById('navigation');
    
    navigationCheckbox.addEventListener('change', () => {
        if (navigationCheckbox.checked) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    });
});

// Top-Up Button

window.onload = function() {
    const top_up = document.getElementById("top_up");

// Zeigt Button, sobald gescrollt wird an der in CSS definierten Stelle.
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            top_up.classList.add("show");
            top_up.classList.remove("hide");
        } else {
            top_up.classList.add("hide");
            top_up.classList.remove("show");
        }
    };

// Scrollt nach oben, wenn Button geklickt wird.
    top_up.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
};