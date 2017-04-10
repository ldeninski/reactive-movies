import { IMovie, IMoviesState } from "../Interface";
import { IMovieActions } from "../actions/movie";
import { List } from "immutable";
import {ActionTypes} from "../actions/movie";

const movieSorter = (movieA: IMovie, movieB: IMovie) => movieA.title.toLocaleLowerCase() > movieB.title.toLocaleLowerCase() ? 1 : -1

export function movies(state: IMoviesState, action: IMovieActions): IMoviesState {
	switch (action.type) {
		case ActionTypes.NEW:
			return {
				...state,
				movies: state.movies.push({ id: action.id, title: action.title, year: action.year, plotSummary: action.plotSummary })
					.sort(movieSorter) as List<IMovie>
			};
		case ActionTypes.DELETE:
			return {
				...state,
				[action.stateKey]: (state as any)[action.stateKey].filter((movie: IMovie) => movie.id != action.id) as List<IMovie>
			};
		case ActionTypes.FAV: {
			let favorited;
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id == action.id ? (favorited = movie, false) : true) as List<IMovie>,
				favorites: favorited ? state.favorites.push(favorited) : state.favorites
			}
		}
		case ActionTypes.UNFAV: {
			let unfavorited;
			return {
				...state,
				favorites: state.favorites.filter((movie) => movie.id == action.id ? (unfavorited = movie, false) : true) as List<IMovie>,
				movies: unfavorited ? state.movies.push(unfavorited).sort(movieSorter) as List<IMovie> : state.movies
			}
		}
		case ActionTypes.UPVOTE: {
			let list: List<IMovie> = (state as any)[action.stateKey];
			let index = list.findIndex((movie: IMovie) => action.id == movie.id);
			if (index > 0) {
				list = list.withMutations((list) => {
					let upvoted = list.get(index);
					list.set(index, list.get(index - 1)).set(index - 1, upvoted)
				})
			}
			return {
				...state,
				[action.stateKey]: list
			} as any
		}
		case ActionTypes.DOWNVOTE: {
			let list: List<IMovie> = (state as any)[action.stateKey];
			let index = list.findIndex((movie: IMovie) => action.id == movie.id);
			if (index < list.size - 1) {
				list = list.withMutations((list) => {
					let downvoted = list.get(index);
					list.set(index, list.get(index + 1)).set(index + 1, downvoted)
				})
			}
			return {
				...state,
				[action.stateKey]: list
			} as any
		}
		default:
			return state;
	}
}