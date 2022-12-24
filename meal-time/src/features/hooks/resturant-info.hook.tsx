import { useState, useEffect } from "react";
import { Resturant } from "../../typings/resturant.interface";

const tempInfo: Array<Resturant> = [
	{
		name: "liam",
		icon: "temp",
		photos: ["Temp"],
		address: "Temp",
		openingHours: "temp",
		rating: 5,
		isClosedTemp: false,
	},
];

export const GetResturantInfo = (): Array<Resturant> => {
	const [data, setData] = useState(tempInfo);

	return data;
};
