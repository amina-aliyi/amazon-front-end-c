import axios from "axios";
const instance = axios.create({
	// baseURL: " http://127.0.0.1:5005/c-93147/us-central1/api.",
	baseURL: "https://amina-amazon-backend.cyclic.cloud/",
	// baseURL: " http://127.0.0.1:5500",
});

export default instance;
