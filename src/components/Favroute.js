import React, { useState } from "react";
const Favroute = () => {
	const [favroute, setFavroute] = useState(localStorage.getItem("favMovie"));
	const favArray = JSON.parse(favroute);

	return (
		<div>
			{console.log(typeof favArray)}
			<div className="row">
				{favArray.map((item, index) => {
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

export default Favroute;
