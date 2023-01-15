import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import styled from "styled-components/native";

import { Resturant } from "../../typings/resturant.interface";
import { GetResturantInfo } from "../hooks/resturant-info.hook";

const ResturantCard = styled(Card)`
	background-color: yellow;
`;

const Title = styled(Text)`
	color: blue;
	margin: 10px;
`;

export const ResturantInfoCard = () => {
	const data: Array<Resturant> = GetResturantInfo();
	return (
		<ResturantCard elevation={5}>
			<Title>{data[0].name}</Title>
			<Title>{data[0].address}</Title>
			<Title>{data[0].icon}</Title>
		</ResturantCard>
	);
};
