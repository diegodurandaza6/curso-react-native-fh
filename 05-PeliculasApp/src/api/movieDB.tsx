import axios from 'axios';

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: '77edfdcc3970b85716bfb9e3be7f0a90',
		language: 'es-ES'
	}
});

export default movieDB;