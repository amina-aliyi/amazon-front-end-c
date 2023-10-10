import React from "react";
import "./CheckoutProduct.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({
	id,
	price,
	image,
	rating,
	quantity,
	title,
	uniqueId,
	hideButton,
}) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = (uniqueId) => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			uniqueId: uniqueId,
		});
	};
	// const product = basket.find((item) => item.id === id);
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} />
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
					
				</p>
				<p className="checkoutProduct_quantity"> Quantity:{quantity}</p>
				<div className="checkoutProduct_rating">
					{Array({ rating })
						.fill()
						.map((_, i) => (
							<GradeIcon className="yellow" />
						))}
				</div>
				{!hideButton && (
					<button onClick={() => removeFromBasket(uniqueId)}>
						Remove From Basket
					</button>
				)}{" "}
			</div>
		</div>
	);
}

export default CheckoutProduct;
