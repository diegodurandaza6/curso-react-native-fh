import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {

	const {top} = useSafeAreaInsets();

	const [refreshing, setRefreshing] = useState(false)
	const [data, setData] = useState<string>()

	const { theme: { colors } } = useContext(ThemeContext);

	const onRefresh = () => {
		setRefreshing(true);

		setTimeout(() => {
			console.log('Terminamos');
			setRefreshing(false);
			setData('Hola mundo')
		}, 4000);
	}

	return (
		<ScrollView
			style={{
				marginTop: refreshing ? top : 0
			}}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					progressViewOffset={10}
					progressBackgroundColor={colors.primary}
					colors={['red', 'yellow', 'green', 'blue']}
					// style={{backgroundColor:'#5856D6'}} // iOS
					// tintColor='white' // iOS
				/>
			}
		>
			<View style={styles.globalMargin}>
				<HeaderTitle title="Pull to refresh" />
				{
					data && <HeaderTitle title={data} />
				}
			</View>
		</ScrollView>
	)
}
