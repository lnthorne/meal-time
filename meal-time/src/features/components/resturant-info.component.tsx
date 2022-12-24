import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";

import { Resturant } from "../../typings/resturant.interface";
import { GetResturantInfo } from "../hooks/resturant-info.hook";

export const ResturantInfo = () => {
	const data: Array<Resturant> = GetResturantInfo();
	return (
		<Card elevation={5} style={styles.card}>
			<Text>{data[0].name}</Text>
			<Text>{data[0].address}</Text>
			<Text>{data[0].icon}</Text>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "green",
	},
});
