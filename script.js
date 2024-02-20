$(document).ready(function() {
    $('#searchInput').on('input', function() {
        var searchText = $(this).val().toLowerCase();
        $('#searchResults').empty();
        if (searchText.length >= 3) {
            $('h3, p').each(function() {
                var text = $(this).text().toLowerCase();
                if (text.includes(searchText)) {
                    $('#searchResults').append($(this).clone());
                }
            });          
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    mostrarReceptes();
});

function mostrarReceptes() {
    var container = document.getElementById('contenidor_receptes');
    container.innerHTML = '';

    receptes.forEach(function(recepta) {
        var receptaElement = document.createElement('div');
        receptaElement.classList.add('recepta');

        var titleElement = document.createElement('h3');
        titleElement.textContent = recepta.titol;

        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = recepta.descripcio;

        var imageElement = document.createElement('img');
        imageElement.src = recepta.imatge;

        receptaElement.appendChild(titleElement);
        receptaElement.appendChild(descriptionElement);
        receptaElement.appendChild(imageElement);

        container.appendChild(receptaElement);
    });
}
