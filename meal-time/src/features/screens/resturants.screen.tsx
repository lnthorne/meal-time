import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { Resturant } from "../../typings/resturant.interface";

import { ResturantInfo } from "../components/resturant-info.component";

export const ResturantScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar value={""} />
			</View>
			<View style={styles.list}>
				<ResturantInfo />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	search: {
		padding: 16,
	},
	list: {
		flex: 1,
		padding: 16,
		backgroundColor: "blue",
	},
});