import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import styled from "styled-components/native";

import { Resturant } from "../../typings/resturant.interface";
import { GetResturantInfo } from "../hooks/resturant-info.hook";

const Title = styled.Text`
	color: blue;
	margin: 10px;
`;

export const ResturantInfoCard = () => {
	const data: Array<Resturant> = GetResturantInfo();
	return (
		<Card elevation={5} style={styles.card}>
			<Title>{data[0].name}</Title>
			<Title>{data[0].address}</Title>
			<Title>{data[0].icon}</Title>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "green",
	},
});
