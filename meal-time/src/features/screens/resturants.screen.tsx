import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { Resturant } from "../../typings/resturant.interface";
import styled, { ThemeProvider } from "styled-components/native";

import { ResturantInfoCard } from "../components/resturant-info-card.component";
import { theme } from "../../infrastructure/theme";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
`;

const SearchConatainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const ResturantListCOntainer = styled(View)`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`;

export const ResturantScreen = () => {
	return (
		<SafeArea>
			<SearchConatainer>
				<Searchbar value={""} />
			</SearchConatainer>
			<ResturantListCOntainer>
				<ResturantInfoCard />
			</ResturantListCOntainer>
		</SafeArea>
	);
};
