import React, { useContext } from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

	const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
	const { top } = useSafeAreaInsets();

	const {setMainColors, setPrevMainColors} = useContext(GradientContext)
	
	const getPosterColors = async (index: number) => {
		const movie = nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
		
		const [primary = 'green', secondary = 'black'] = await getImageColors(uri);

		// console.log({primary, secondary});
		setMainColors({primary, secondary});
	}

	useEffect(() => {
		if(nowPlaying.length > 0){
			getPosterColors(0)
		}
	}, [nowPlaying])

	if (isLoading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator color='red' size={100} />
			</View>
		)
	}

	return (
		<GradientBackground>
			<ScrollView>
				<View style={{ 
					marginTop: top + 20, 
					// backgroundColor: 'green',
				}}>

					{/* Carousel principal */}
					<View style={{ 
					// backgroundColor: 'red', 
					height: 440 
					}}>
						<Carousel
							data={nowPlaying}
							renderItem={({ item }: any) => <MoviePoster movie={item} />}
							sliderWidth={windowWidth}
							itemWidth={300}
							inactiveSlideOpacity={0.9}
							onSnapToItem={ index => getPosterColors(index) }
						/>
					</View>

					{/* Peliculas populares */}
					<HorizontalSlider title="Popular" movies={popular}/>
					<HorizontalSlider title="Top Rated" movies={topRated}/>
					<HorizontalSlider title="Upcoming" movies={upcoming}/>
					
				</View>
			</ScrollView>
		</GradientBackground>
	)
}
