import { useState, useEffect } from "react";
import { Resturant } from "../../typings/resturant.interface";

const tempInfo: Array<Resturant> = [
	{
		name: "liam",
		icon: "temp",
		photos: [
			"https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
		],
		address: "100 some random street",
		openingHours: "temp",
		rating: 5,
		isClosedTemp: false,
	},
];

export const GetResturantInfo = (): Array<Resturant> => {
	const [data, setData] = useState(tempInfo);

	return data;
};
