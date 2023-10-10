import React, { useState } from "react";
import "./Product.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const [quantity, setQuantity] = useState(0);

	const incrementQuantity = () => {
		setQuantity(quantity + 1);
		// {basket.length + 1}
	};

	const decrementQuantity = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
			// { basket.length - 1 }
		}
	};

	// console.log("this is a basket", basket);
	const addToBasket = () => {
		const totalPrice = price * quantity;
		const uniqueId = Date.now(); // Generates a unique identifier based on the current timestamp

		for (let i = 0; i < quantity; i++) {
			// i < quantity has to be optional here coz no limitation for quantity
			dispatch({
				type: "ADD_TO_BASKET",
				item: {
					id: id,
					title: title,
					image: image,
					price: totalPrice,
					rating: rating,
					quantity: quantity,
					uniqueId: uniqueId,
				},
			});
		}
	};
	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<GradeIcon className="yellow" />
						))}
				</div>
			</div>
			<img src={image} alt={title} />
			<div className="product__quantity">
				<button onClick={decrementQuantity}>-</button>
				<p>{quantity}</p>
				<button onClick={incrementQuantity}>+</button>
			</div>
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
