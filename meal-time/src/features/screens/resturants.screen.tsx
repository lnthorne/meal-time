import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { Resturant } from "../../typings/resturant.interface";
import styled from "styled-components/native";

import { ResturantInfoCard } from "../components/resturant-info-card.component";

const statBarHeight = StatusBar.currentHeight;
const Body = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
`;

const SearchBar = styled(View)`
	padding: 16px;
`;

const DataList = styled(View)`
	flex: 1;
	padding: 16px;
	background-color: blue;
`;

export const ResturantScreen = () => {
	return (
		<Body>
			<SearchBar>
				<Searchbar value={""} />
			</SearchBar>
			<DataList>
				<ResturantInfoCard />
			</DataList>
		</Body>
	);
};
