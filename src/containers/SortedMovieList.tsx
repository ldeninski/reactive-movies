import * as React from "react";
import * as Redux from "redux";
import { List, Set, fromJS } from "immutable";
import { IMoviesState, IMovie } from "../Interface";
import { connect } from "react-redux";
import { ActionTypes } from "../actions/movie";
import { MovieList } from "../components/MovieList";
import { deleteMovie, favMovie } from "../actions/movie";

interface IOwnProps {
	stateKey: string
	favText?: string
	favIconClass?: string
	listTitle: string
}

interface DispatchProps {
	onFavClick: any
	onDelClick: any
	onUpClick: any
	onDownClick: any
}

const mapStateToProps = (state: any, ownProps: IOwnProps) => ({
	movies: state[ownProps.stateKey] as List<IMovie>,
	sorted: true,
	favText: ownProps.favText,
	favIconClass: ownProps.favIconClass || "glyphicon glyphicon-star-empty"
});
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, ownProps: IOwnProps) => ({
	onFavClick: (id: number) => {
		dispatch(favMovie(id))
	},
	onDelClick: (id: number) => {
		dispatch(deleteMovie(id, ownProps.stateKey))
	}
});

export const SortedMovieList = connect<{}, DispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(MovieList);