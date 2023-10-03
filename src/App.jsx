import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./FireBase";
import Payment from "./payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51NvldtEEr4A1Kzsa6np2JzP6srAGmDMAlTCIHsKYacGUEtlsgJGopGzP9fRSu7q3qLNXSc7i1inOoeBC5NihxhNz00fZGVayv6"
);
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
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
								</Elements>
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
