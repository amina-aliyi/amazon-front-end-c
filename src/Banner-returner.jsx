import React, { useState } from "react";
import "./App.css";
import "./Bannerimg.css"
import BannerImage from "./BannerImage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function BannerReturner() {
	 const [currentIndex, setCurrentIndex] = useState(0);
	const imageTextPairs = [
		{
			imageSrc: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
			text: "Kitchen favorites Under $50",
		},
		{
			imageSrc: "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
			text: "Shop Books",
		},
		{
			imageSrc: "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
			text: "Shop Gaming essentials",
		},
		{
			imageSrc: "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
			text: "Beauty products",
		},
		{
			imageSrc: "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
			text: "New arrivals Toys"
		},
	];
	  const goToPrevSlide = () => {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? imageTextPairs.length - 1 : prevIndex - 1
			);
		};

		const goToNextSlide = () => {
			setCurrentIndex((prevIndex) =>
				prevIndex === imageTextPairs.length - 1 ? 0 : prevIndex + 1
			);
		};
	return (
		<div>
			<BannerImage
				imageSrc={imageTextPairs[currentIndex].imageSrc}
				text={imageTextPairs[currentIndex].text}
			/>
			<button className="arrow prev" onClick={goToPrevSlide}>
				<ArrowBackIosIcon fontSize="large" />
			</button>
			<button className="arrow next" onClick={goToNextSlide}>
				<ArrowForwardIosIcon fontSize="large" />
			</button>
		</div>
	);
}

export default BannerReturner;
