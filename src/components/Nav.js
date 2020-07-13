import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<div className="navbar bg-dark">
				<ul className="nav">
					<li className="nav-item ">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/fav">
							Fav
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
