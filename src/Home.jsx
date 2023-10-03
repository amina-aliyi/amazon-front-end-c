import React from "react";
import Product from "./Product";
import "./Home.css";
import BannerReturner from "./Banner-returner";
// import ImageBanner from "./ImageBanner";
function Home() {
	return (
		<div className="home">
			<div className="home_container">
			
				<BannerReturner />
				{/* <BannerImage/> */}
				<div className="home_row">
					<Product
						id="1232887688"
						title="Toys Under $30"
						price={11.96}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg"
					/>
					<Product
						id="1232880088"
						title="Electronics"
						price={811.90}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
					/>
					<Product
						id="1232328888"
						title="Kitchen"
						price={1177.79}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg"
					/>
					<Product
						id="12325458888"
						title="Watch for you"
						price={1199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
					/>
				</div>
				<div className="home_row">
					<Product
						id="123098288"
						title="Laptops"
						price={119.96}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
					/>
					<Product
						id="12328854288"
						title="Home $ Kitchens Under $30"
						price={118.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg"
					/>
					{/* <Product />
					<Product /> */}
				</div>
				<div className="home_row">
					{/* <Product /> */}
					<Product
						id="123674028888"
						title="Your Dream Confort starts Here, Just For Your Home"
						price={1100.96}
						rating={5}
						image="https://m.media-amazon.com/images/I/81AOpcqJfHL._AC_SY200_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

