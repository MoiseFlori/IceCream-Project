export function rotateReviewsListSection() {
    function rotateReviews() {
        const reviewsList = document.querySelector('.profile-picture-list');
        if (!reviewsList || !reviewsList.firstElementChild) return; // Verificăm dacă există lista și primul copil
        const firstItem = reviewsList.firstElementChild;
        reviewsList.appendChild(firstItem); // Mutăm primul element la finalul listei
    }

    // Stocăm ordinea inițială a recenziilor
    const initialReviewsOrder = Array.from(document.querySelectorAll('.profile-picture-list li'));

    // Rotește recenziile la fiecare 5 secunde, indiferent de lățimea ferestrei
    setInterval(function () {
        rotateReviews();
    }, 5000);

    // Restaurăm ordinea inițială când se redimensionează fereastra
    window.addEventListener('resize', function () {
        const reviewsList = document.querySelector('.profile-picture-list');
        if (!reviewsList) return; // Verificăm existența listei

        // Restaurăm ordinea inițială a recenziilor la redimensionare
        reviewsList.innerHTML = ''; // Ștergem conținutul existent
        initialReviewsOrder.forEach(function (item) {
            reviewsList.appendChild(item); // Re-adăugăm elementele în ordinea inițială
        });
    });
}
