import axios from 'axios';

const API_KEY = '36230670cbcaf038e91b83b62755e7ad';
const ROOT_URl = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URl}&q=${city},in`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}