import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./FireBase";
function App() {
	const [{ }, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// there is logged in user
				// the action ganna be setting the logged in user.. => action.user
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user is logged out....empyt that space
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route
						path="/"
						element={
							<>
								<Header /> <Home />
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header /> <Checkout />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
