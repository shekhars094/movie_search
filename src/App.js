import React from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favroute from "./components/Favroute";
import UnFavroute from "./components/UnFavroute";

function App() {
	return (
		<Router>
			<div className="container">
				<Switch>
					<Route exact path="/fav" component={Favroute}></Route>
					<Route path="/unfav" component={UnFavroute}></Route>
				</Switch>

				<Nav />
				<Search />
			</div>
		</Router>
	);
}

export default App;
