import React, { useState } from "react";

const UnFavroute = () => {
	const [unFavroute, setUnFavroute] = useState(
		localStorage.getItem("unFavMovie")
	);

	const unFavArray = JSON.parse(unFavroute);

	return (
		<div>
			<div className="row">
				{unFavArray.map((item, index) => {
					return (
						<div className="col-sm-4" key={index}>
							<img
								src={item}
								className="img-fluid img-thumbnail"
								alt=""
								width="300px"
								height="400px"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UnFavroute;
