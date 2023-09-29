import React from "react";
import "./CheckoutProduct.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, price, image, rating, title }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	const product = basket.find((item) => item.id === id);
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} />
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">
					
					{product ? `${product.title} (${product.quantity})` : ""}
				</p>

				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{product ? product.price : 0}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array({ rating })
						.fill()
						.map((_, i) => (
							<GradeIcon className="yellow" />
						))}
				</div>
				<button onClick={removeFromBasket}>Remove From Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
