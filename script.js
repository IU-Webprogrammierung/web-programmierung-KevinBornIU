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
