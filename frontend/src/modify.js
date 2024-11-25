window.loadMovie = function() {
    const queryParams = new URLSearchParams(window.location.search);
    const movieId = queryParams.get('id');
    // TODO Cargar la pelicula cuyo id es movieId y rellenar el formulario con esos datos
};

window.modifyMovie = function() {
    // TODO Recoger los datos del formulario

    // TODO Validar formulario

    // TODO Llamar al backend para modificar la pelicula
};
