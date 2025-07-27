function afficher(id) {
    document.querySelectorAll('.section-cachee').forEach(function(section) {
        section.style.display = 'none';
    });

    document.getElementById(id).style.display = "block";
}