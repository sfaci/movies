import axios from 'axios';
import { el, icon, td } from './documentUtil';
import { notifyOk } from './dialogUtil';

window.readMovies = function() {
    axios.get('http://localhost:8081/movies')
        .then((response) => {
            const movieList = response.data;
            const movieTable = el('tableBody');
            
            movieList.forEach(movie => {
                const row = document.createElement('tr');
                row.id = 'movie-' + movie.id;
                row.innerHTML = td(movie.title) +
                                td(movie.description) +
                                td(movie.year) +
                                '<a class="btn btn-warning" href="modify.html">' +
                                icon('edit') + 
                                '</a> ' +
                                '<a class="btn btn-danger" href="javascript:removeMovie(' + movie.id + ')">' +
                                icon('delete') +
                                '</a>';
                movieTable.appendChild(row);
            })
        });
};

window.removeMovie = function(id) {
    if (confirm('¿Está seguro de que desea eliminar esta película?')) {
        axios.delete('http://localhost:8081/movies/' + id)
            .then((response) => {
                if (response.status == 204) {
                    notifyOk('Pelicula eliminada correctamente');
                    el('movie-' + id).remove();
                }
            });
    }
};