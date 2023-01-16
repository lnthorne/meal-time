import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import { ResturantScreen } from "./src/features/screens/resturants.screen";

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<ResturantScreen />
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}
