export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	//   console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			// Check if the product already exists in the basket
			const existingProductIndex = state.basket.findIndex(
				(item) => item.id === action.item.id
			);
			if (existingProductIndex !== -1) {
				// If it exists, increase the quantity
				state.basket[existingProductIndex].quantity += 1;
				return { ...state };
			} else {
				// If it doesn't exist, add it with a quantity of 1
				return {
					...state,
					basket: [...state.basket, { ...action.item, quantity: 1 }],
				};
			}

		case "REMOVE_FROM_BASKET":
			// Modify the logic to decrease the quantity if it's greater than 1
			const productIndex = state.basket.findIndex(
				(item) => item.id === action.id
			);
			let newBasket = [...state.basket];
			if (productIndex >= 0) {
				if (newBasket[productIndex].quantity > 1) {
					newBasket[productIndex].quantity -= 1;
					// console.log(productIndex);
					
				} else {
					// Remove the product from the basket if quantity is 1
					newBasket.splice(productIndex, 1);
				}
			}
			return { ...state, basket: newBasket };
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};
export default reducer;
