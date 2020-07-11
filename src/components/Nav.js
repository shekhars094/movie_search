import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {
	return (
		<div>
			<div className="navbar bg-dark">
				<ul class="nav">
					<li class="nav-item ">
						<Link class="nav-link" to="/unfav">
							Fav
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/fav">
							UnFav
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
