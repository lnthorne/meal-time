import { useState, useEffect } from "react";
import { Text, Card } from "react-native-paper";
import { Image } from "react-native";
import styled from "styled-components/native";

import { Resturant } from "../../typings/resturant.interface";
import { GetResturantInfo } from "../hooks/resturant-info.hook";

const ResturantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ResturantImage = styled(Image)`
	width: 100%;
	height: 200px;
`;

const Title = styled(Text)`
	color: ${(props) => props.theme.colors.ui.primary};
	padding: ${(props) => props.theme.space[3]};
`;

export const ResturantInfoCard = () => {
	const data: Array<Resturant> = GetResturantInfo();
	return (
		<ResturantCard elevation={5}>
			<ResturantImage
				source={{
					uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
				}}
			/>
			<Title>{data[0].name}</Title>
			<Title>{data[0].address}</Title>
			<Title>{data[0].icon}</Title>
		</ResturantCard>
	);
};
