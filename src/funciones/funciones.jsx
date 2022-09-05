import axios from 'axios';

const todosPersonajes = async (state) => {
    await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            state(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {
    todosPersonajes
};