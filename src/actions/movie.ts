export enum ActionTypes {
	NEW,
	DELETE,
	FAV,
	UNFAV,
	UPVOTE,
	DOWNVOTE
}

export interface addMovieAction {		// addDramaMovie :D
	type: ActionTypes.NEW
	id: number
	title: string
	year: number
	plotSummary: string
}
export interface deleteMovieAction {	// can be generalized
	type: ActionTypes.DELETE
	id: number
	stateKey: string
}
export interface upVoteMovieAction {
	type: ActionTypes.UPVOTE
	id: number
	stateKey: string
}
export interface downVoteMovieAction {
	type: ActionTypes.DOWNVOTE
	id: number
	stateKey: string
}
export interface favMovieAction {
	type: ActionTypes.FAV
	id: number
}
export interface unfavMovieAction {
	type: ActionTypes.UNFAV
	id: number
}
export type IMovieActions = addMovieAction | deleteMovieAction | upVoteMovieAction | downVoteMovieAction | favMovieAction | unfavMovieAction;


interface IaddMovieActionCreator {
	(title: string, year: number, plotSummary: string): addMovieAction
	lastId: number
}

// action creators
export const addMovie: IaddMovieActionCreator = (() => {
	let addMovie: any = (title: string, year: number, plotSummary: string) => {
		return { type: ActionTypes.NEW, title, year, plotSummary, id: addMovie.lastId++ }
	};
	addMovie.lastId = 0;
	return addMovie
})();
export const deleteMovie = (id: number, stateKey: string): deleteMovieAction => ({ type: ActionTypes.DELETE, id, stateKey })
export const upVoteMovie = (id: number, stateKey: string): upVoteMovieAction => ({ type: ActionTypes.UPVOTE, id, stateKey })
export const downVoteMovie = (id: number, stateKey: string): downVoteMovieAction => ({ type: ActionTypes.DOWNVOTE, id, stateKey })
export const favMovie = (id: number): favMovieAction => ({ type: ActionTypes.FAV, id })
export const unfavMovie = (id: number): unfavMovieAction => ({ type: ActionTypes.UNFAV, id })