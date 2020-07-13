import React, { useState } from "react";

import { IoIosHeart } from "react-icons/io";

const Search = () => {
	const [values, setValues] = useState({
		titleOrId: "",
		search: "",
		year: "",
		type: "",
	});

	const [results, setResults] = useState([]);
	const [favroute, setFavroute] = useState([]);

	const addFav = (favMovie, event) => {
		if (localStorage.getItem("favMovie")) {
			let localFavData = localStorage.getItem("favMovie");

			let favArray = JSON.parse(localFavData);

			if (favArray.includes(favMovie)) {
				let movieIndex = favArray.indexOf(favMovie);
				favArray.splice(movieIndex, 1);
				let uniqueFav = favArray.filter(function (elem, pos) {
					return favArray.indexOf(elem) == pos;
				});
				setFavroute(uniqueFav);
				localStorage.setItem("favMovie", JSON.stringify(uniqueFav));
				event.target.style.color = "black";
			} else {
				favArray.push(favMovie);

				let uniqueFav = favArray.filter(function (elem, pos) {
					return favArray.indexOf(elem) == pos;
				});

				setFavroute(uniqueFav);
				localStorage.setItem("favMovie", JSON.stringify(uniqueFav));
				event.target.style.color = "red";
			}

			let uniqueFav = favArray.filter(function (elem, pos) {
				return favArray.indexOf(elem) == pos;
			});

			setFavroute(uniqueFav);
			localStorage.setItem("favMovie", JSON.stringify(uniqueFav));
		} else {
			localStorage.setItem("favMovie", JSON.stringify([favMovie]));
			event.target.style.color = "red";
		}
	};

	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
		setResults([]);
	};

	const handleSubmit = async () => {
		const { titleOrId, search, year, type } = values;

		const response = await fetch(
			`https://www.omdbapi.com/?i=${titleOrId}&s=${search}&y=${year}&type=${type}&apikey=8b4e12f4`
		);

		const data = await response.json();
		setResults([...results, ...data.Search]);
	};

	return (
		<>
			<form className="row" style={{ marginTop: "30px" }}>
				<div className="col-sm-2 form-group d-inline-block mr-20">
					<select
						className="form-control"
						value={values.titleOrId}
						id="exampleFormControlSelect1"
						onChange={handleChange("titleOrId")}>
						<option defaultValue>Search By</option>
						<option value="t">Title</option>
						<option value="i">Id</option>
					</select>
				</div>

				<div className="col-sm-3 form-group d-inline-block">
					<input
						type="text"
						className="form-control"
						placeholder="Search"
						value={values.search}
						onChange={handleChange("search")}></input>
				</div>

				<div className="col-sm-3 form-group d-inline-block">
					<input
						type="text"
						className="form-control"
						placeholder="Year"
						value={values.year}
						onChange={handleChange("year")}></input>
				</div>
				<div className="col-sm-2 w-30 form-group d-inline-block mr-20">
					<select
						className="form-control"
						id="exampleFormControlSelect1"
						onChange={handleChange("type")}>
						<option defaultValue>Type</option>
						<option value="movie">Movies</option>
						<option value="series">Series</option>
						<option value="episode">Episodes</option>
					</select>
				</div>

				<div
					className="col-sm-2 btn btn-primary form-control"
					onClick={handleSubmit}>
					Search
				</div>
			</form>

			<div className="container bg-dark text-white rounded">
				<div className="row bg-primary">
					{results.map((movie, index) => {
						return (
							<div key={index} className="col-sm-4">
								<div className="m-3">
									<img
										src={movie.Poster}
										className="img-fluid img-thumbnail"
										alt=""
										width="300px"
										height="400px"
									/>
									<div>
										<p className="text-center">
											{movie.Title}
										</p>
									</div>

									<div className="d-block w-5 text-center">
										<IoIosHeart
											style={{ color: "black" }}
											onClick={(event) => {
												addFav(movie.Poster, event);
											}}></IoIosHeart>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Search;
