import settings from './settings'
import movieCard from '../templates/movieCard.hbs'
// import movieP from '../js/movie-pagination'
// console.log(movieP);

const listRef = document.querySelector('.movies__list')
export default function searchMovie(name) {
    return fetch(`${settings.BASE_URL}/search/movie?api_key=${settings.API_KEY}&query=${name}`)
        .then(r => {
            return r.json();
        }).then(r => {
            listRef.innerHTML = ' ';
            const markup = movieCard(r.results)
            // console.log(markup);
            listRef.insertAdjacentHTML('afterbegin', markup)
        })
};