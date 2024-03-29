import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';

interface Props {
	movie: Movie;
	height?: number;
	width?: number;
}

export const MoviePoster = ({ movie, height=420, width=300 }: Props) => {

	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

	const navigation = useNavigation();

	// console.log(uri);

	return (
		<TouchableOpacity 
			onPress={() => navigation.navigate('DetailScreen', movie)}
			activeOpacity={0.8}
			style={{
			height,
			width,
			marginHorizontal: 2,
			paddingBottom: 20,
			paddingHorizontal: 7
			// backgroundColor: 'blue'
		}}>
			<View style={styles.imageContainer}>
				<Image 
					source={{uri}}
					style={styles.image}
				/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		borderRadius: 18,
	},
	imageContainer: {
		flex: 1,
		borderRadius: 18,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,

		elevation: 9,
	}
});