import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams, Navigation } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

// La mejor forma de mapear los parametros
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({route, navigation}: Props) => {

	// Una forma de mapear los parametros
	// const movie = route.params as Movie;
	const movie = route.params
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

	//console.log(movie.id);

	const { isLoading, cast, movieFull } =useMovieDetails(movie.id)

	return (
		<ScrollView>
			<View style={ styles.imageContainer }>
				<View style={ styles.imageBorder }>
					<Image 
						source={{ uri }}
						style={ styles.posterImage }
					/>
				</View>
			</View>

			<View style={ styles.marginContainer }>
				<Text style={ styles.subTitle }>{ movie.original_title }</Text>
				<Text style={ styles.title }>{ movie.title }</Text>
			</View>

			{
				isLoading
				? <ActivityIndicator size={35} color="grey" style={{marginTop: 20}}/>
				: <MovieDetails movieFull={movieFull!} cast={cast}/>
			}
			
			{/* Boton para cerrar */}
			<View style={styles.backButton}>
				<TouchableOpacity
					onPress={() => navigation.pop()}
				>
					<Icon
						color="black"
						name="arrow-back-outline"
						size={50}
						style={styles.backButtonIcon}
					/>
				</TouchableOpacity>
			</View>

		</ScrollView>
	)
}

const styles = StyleSheet.create({
	imageContainer:{
		width: '100%',
		height: screenHeight * 0.7,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,

		elevation: 9,
	},
	imageBorder: {
		flex: 1,
		overflow: 'hidden',
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25
	},
	posterImage: {
		flex: 1
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 20
	},
	subTitle: {
		fontSize: 16,
		opacity: 0.8
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	backButton: {
		position: 'absolute',
		top:20,
		left:20,
		elevation:9,
		zIndex:999,
	},
	backButtonIcon: {
		shadowColor: "#FFF",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 1,
		shadowRadius: 7,
		elevation:10,
		//backgroundColor: 'red'
	}
})