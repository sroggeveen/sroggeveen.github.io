const hSections = document.querySelectorAll('.horizontal-section');

const scrollAmount = 80;

hSections.forEach((hSection) => {
    hSection.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY > 0) {
            hSection.scrollLeft += scrollAmount;
        } else {
            hSection.scrollLeft -= scrollAmount;
        }
    });
});