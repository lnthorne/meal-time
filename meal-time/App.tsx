import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ResturantScreen } from "./src/features/screens/resturants.screen";

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});
	return (
		<>
			<ThemeProvider theme={theme}>
				<ResturantScreen />
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}
