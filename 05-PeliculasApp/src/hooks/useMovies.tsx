import { useEffect, useState } from 'react'
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

export const useMovies = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
	const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([])

	const getMovies = async () => {
		const resNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
		const resPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
		await movieDB.get<MovieDBMoviesResponse>('/top_rated');
		await movieDB.get<MovieDBMoviesResponse>('/upcoming');
		setPeliculasEnCine(resNowPlaying.data.results);
		setPeliculasPopulares(resPopular.data.results);
		setIsLoading(false);
	}

	useEffect(() => {
		//noe_playing
		getMovies()
	}, [])

	return {
		peliculasEnCine,
		isLoading,
		peliculasPopulares
	}
	
}
