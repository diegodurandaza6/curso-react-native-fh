import { useRef } from 'react'
import { Animated, PanResponder } from 'react-native';

export const useDraggableView = () => {

	const pan = useRef(new Animated.ValueXY()).current;

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: Animated.event([
			null,
			{
				dx: pan.x, // x,y are Animated.Value
				dy: pan.y,
			},
		],
		{useNativeDriver: false}
		),
		onPanResponderRelease: () => {
			Animated.spring(
				pan, // Auto-multiplexed
				{ 
					toValue: { x: 0, y: 0 }, 
					useNativeDriver: false,
				} // Back to zero
			).start();
		},
	});

	return {
		panResponder,
		pan
	}
}
