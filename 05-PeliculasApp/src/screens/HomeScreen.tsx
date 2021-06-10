import React from 'react'
import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

	const { peliculasEnCine, isLoading, peliculasPopulares } = useMovies();
	const { top } = useSafeAreaInsets();
	
	if (isLoading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator color='red' size={100} />
			</View>
		)
	}

	return (
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
						data={peliculasEnCine}
						renderItem={({ item }: any) => <MoviePoster movie={item} />}
						sliderWidth={windowWidth}
						itemWidth={300}
						inactiveSlideOpacity={0.9}
					/>
				</View>

				{/* Peliculas populares */}
				<HorizontalSlider movies={peliculasPopulares} title="Populares"/>
				
				
			</View>
		</ScrollView>
	)
}
