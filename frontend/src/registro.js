import axios from 'axios';
import { notifyError, notifyOk } from './dialogUtil.js';
import { el } from './documentUtil.js';

window.addMovie = function() {
    const title = el('title').value;
    const description = el('description').value;
    const year = el('year').value;

    // TODO Validación de datos
    if (title === '') {
        notifyError('El titulo es un campo obligatorio');
        return;
    }

    axios.post('http://localhost:8081/movies', {
        title: title,
        description: description,
        year: year
    });

    // TODO Confirmar al usuario que todo ha ido bien (o mal)
    notifyOk('Pelicula registrada');

    // TODO Limpiar el formulario
    el('title').value = '';
    el('description').value = '';
    el('year').value = '';
};