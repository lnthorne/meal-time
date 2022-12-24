import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ResturantScreen } from "./src/features/screens/resturants.screen";

export default function App() {
	return (
		<>
			<ResturantScreen />
			<ExpoStatusBar style="auto" />
		</>
	);
}
