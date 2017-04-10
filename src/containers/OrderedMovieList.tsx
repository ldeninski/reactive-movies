import * as React from "react";
import * as Redux from "redux";
import { List, Set, fromJS } from "immutable";
import { IMoviesState, IMovie } from "../Interface";
import { connect } from "react-redux";
import { ActionTypes } from "../actions/movie";
import { MovieList } from "../components/MovieList";
import { deleteMovie, upVoteMovie, downVoteMovie, unfavMovie } from "../actions/movie";

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
	sorted: false,
	favText: ownProps.favText,
	favIconClass: ownProps.favIconClass || "glyphicon glyphicon-star"
});
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, ownProps: IOwnProps) => ({
	onFavClick: (id: number) => {
		dispatch(unfavMovie(id))
	},
	onDelClick: (id: number) => {
		dispatch(deleteMovie(id, ownProps.stateKey))
	},
	onUpClick: (id: number) => {
		dispatch(upVoteMovie(id, ownProps.stateKey))
	},
	onDownClick: (id: number) => {
		dispatch(downVoteMovie(id, ownProps.stateKey))
	}
});

export const OrderedMovieList = connect<{}, DispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(MovieList);