import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<div className="navbar bg-dark">
				<ul className="nav">
					<li className="nav-item ">
						<Link class="navbar-brand" to="/">
							<img
								src="https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								width="30"
								className="rounded"
								height="30"
								alt=""
							/>
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
