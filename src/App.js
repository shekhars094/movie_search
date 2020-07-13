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
				<Nav />
				<Switch>
					<Route exact path="/" component={Search}></Route>
					<Route path="/fav" component={Favroute}></Route>
					<Route path="/unfav" component={UnFavroute}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
