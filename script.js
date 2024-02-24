$(document).ready(function () {
    $('#searchInput').on('input', function () {
        var searchText = $(this).val().toLowerCase();
        $('#contenidor_receptes').empty();
        if (searchText.length >= 1) {
            receptes.forEach(function (recepta) {
                var text = recepta.titol.toLowerCase();
                if (text.includes(searchText)) {
                    var receptaElement = document.createElement('div');
                    receptaElement.classList.add('recepta');

                    var imageElement = document.createElement('img');
                    imageElement.src = recepta.imatge;
                    var titleElement = document.createElement('h3');
                    titleElement.textContent = recepta.titol;

                    receptaElement.appendChild(imageElement);
                    receptaElement.appendChild(titleElement);

                    $('#contenidor_receptes').append(receptaElement);

                    // Afegeix un event listener al div de la recepta per a l'acció de clic
                    receptaElement.addEventListener('click', function() {
                        // Redirigeix a la pàgina HTML corresponent
                        window.location.href = 'receptes/' + recepta.titol.toLowerCase().replace(/ /g, '_') + '.html';
                    });
                }
            });
        } else {
            mostrarReceptes();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    mostrarReceptes();
});

var receptesShuffled = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    receptesShuffled++;
    return array;
}

function mostrarReceptes() {

    
    var container = document.getElementById('contenidor_receptes');
    container.innerHTML = '';

    // Barreja l'array de receptes
    if (receptesShuffled < 1) {
        shuffleArray(receptes);        
    }


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
