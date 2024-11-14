import axios from 'axios';

window.addMovie = function() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const year = document.getElementById('year').value;

    // TODO Validación de datos
    if (title === '') {
        alert('El titulo es un campo obligatorio');
        return;
    }

    axios.post('http://localhost:8081/movies', {
        title: title,
        description: description,
        year: year
    });
};