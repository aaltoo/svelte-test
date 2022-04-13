import axios from 'axios';

const httpClient = axios.create({
	baseURL: 'https://api.waifu.im/',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default httpClient;
