import { List, Set } from "immutable";

export interface IMovie {
	title: string,
	year: number,
	plotSummary: string,
	id: number
};

export interface IMoviesState {
	favorites: List<IMovie>,
	movies: List<IMovie>,
	lastId: number
};

export interface HTMLElementWithValue extends HTMLElement {
	value: any,
	[propName: string]: any
}