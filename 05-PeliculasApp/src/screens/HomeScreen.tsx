import React from 'react'
import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

	const { peliculasEnCine, isLoading } = useMovies();
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
					/>
				</View>

				{/* Peliculas populares */}
				<View style={{ backgroundColor: 'red', height: 260 }}>
					<Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
					<FlatList 
						data={peliculasEnCine}
						renderItem={({ item }: any) => (
							<MoviePoster movie={item} width={140} height={200}/>
						)}
						keyExtractor={ (item) => item.id.toString() }
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					/>
				</View>

				
			</View>
		</ScrollView>
	)
}
