import { useState, useEffect } from "react";
import { View } from "react-native";
import { Text, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import open from "../../../assets/open";
import star from "../../../assets/star";

import { Resturant } from "../../typings/resturant.interface";
import { GetResturantInfo } from "../hooks/resturant-info.hook";

const ResturantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.body};
	color: ${(props) => props.theme.colors.ui.primary};
`;

const Rating = styled(View)`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

const TempCloseWarning = styled(Text)`
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: ${(props) => props.theme.fontSizes.body};
	font-weight: bold;
	color: red;

	margin-left: auto;
`;

const OpenIcon = styled(View)`
	margin-left: auto;
`;

const Address = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const ResturantInfoCard = (restaurant: any = {}) => {
	// const data: Array<Resturant> = GetResturantInfo();
	const {
		name = "Some Restaurant",
		icon,
		photos = [
			"https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
		],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = false,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<ResturantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>
				<Rating>
					{ratingArray.map(() => (
						<SvgXml xml={star} width={20} height={20} />
					))}
					{isClosedTemporarily && <TempCloseWarning>Temporarily Closed</TempCloseWarning>}
					<OpenIcon>
						{isOpenNow && !isClosedTemporarily && <SvgXml xml={open} width={20} height={20} />}
					</OpenIcon>
				</Rating>
				<Address>{address}</Address>
			</Info>
		</ResturantCard>
	);
};
