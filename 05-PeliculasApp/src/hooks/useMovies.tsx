import { useEffect, useState } from 'react'
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

export const useMovies = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

	const getMovies = async () => {
		const res = await movieDB.get<MovieDBNowPlaying>('/now_playing');
		setPeliculasEnCine(res.data.results);

		setIsLoading(false);
	}

	useEffect(() => {
		//noe_playing
		getMovies()
	}, [])

	return {
		peliculasEnCine,
		isLoading
	}
	
}
