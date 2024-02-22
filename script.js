$(document).ready(function () {
    $('#searchInput').on('input', function () {
        var searchText = $(this).val().toLowerCase();
        $('#searchResults').empty();
        if (searchText.length >= 3) {
            $('.recepta h3').each(function () {
                var text = $(this).text().toLowerCase();
                if (text.includes(searchText)) {
                    $('#searchResults').append($(this).closest('.recepta').clone());
                }
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    mostrarReceptes();
});

function mostrarReceptes() {
    var container = document.getElementById('contenidor_receptes');
    container.innerHTML = '';

    receptes.forEach(function (recepta) {

        var receptaElement = document.createElement('div');
        receptaElement.classList.add('recepta');

        var imageElement = document.createElement('img');
        imageElement.src = recepta.imatge;
        var titleElement = document.createElement('h3');
        titleElement.textContent = recepta.titol;

        receptaElement.appendChild(imageElement);
        receptaElement.appendChild(titleElement);

        container.appendChild(receptaElement);

        // Afegeix un event listener al div de la recepta per a l'acció de clic
        receptaElement.addEventListener('click', function() {
            // Redirigeix a la pàgina HTML corresponent
            window.location.href = 'receptes/' + recepta.titol.toLowerCase().replace(/ /g, '_') + '.html';
        });
    });
}