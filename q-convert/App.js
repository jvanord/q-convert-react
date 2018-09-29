import React from 'react';
import {Grid, Section, Block} from 'react-native-responsive-layout';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<Grid scrollable stretchable>
				<Section stretch>
					<Block size="1/1">
						<View style={styles.container}>
							<Text>Empty Boilerplate App</Text>
						</View>
					</Block>
				</Section>
			</Grid>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
