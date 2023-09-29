import React from "react";
import "./Bannerimg.css";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import BannerReturner from "./Banner-returner";
function BannerImage({ imageSrc, text }) {
	



	return (
		<div className="slider-container">
			<div className="slide">
				<img src={imageSrc} alt={text} />
				<div className="image-text">{text}</div>
			</div>
		</div>
	);
}

export default BannerImage;
