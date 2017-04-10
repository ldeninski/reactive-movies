import * as React from "react";
import { AddMovie } from "../containers/AddMovie";
import { SortedMovieList } from "../containers/SortedMovieList";
import { OrderedMovieList } from "../containers/OrderedMovieList";

export const App: React.StatelessComponent<{}> = () =>
	<div className="container-fluid">
		<AddMovie />
		<OrderedMovieList stateKey="favorites" listTitle="Любими" />
		<hr />
		<SortedMovieList stateKey="movies" listTitle="Всички" />
	</div>
