document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada completamente");
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#e0fbfc';
        });
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = '';
        });
    });
});