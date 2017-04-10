import * as React from "react";
import { List } from "immutable";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { movies as reducer } from './reducers/movies';
import { addMovie } from "./actions/movie";
import { App as App } from "./components/App";

let lastId = 0;
let defaultState = {
	favorites: List([
		{ title: "PI", year: 1998, id: lastId++, plotSummary: `The mathematician Maximillian Cohen is tormented by a severe migraine since he was a kid, and he uses many pills to reduce his painful headaches. He is a lonely man, and his only friend is his former professor Sol Robeson. Max has the following assumptions, which rules his life: (1) Mathematics is the language of nature; (2) Everything around us can be represented and understood from numbers; (3) If you graph the numbers in any system, patterns emerge. Therefore there are patterns everywhere in nature. Based on these principles, Max is trying to figure out a system to predict the behavior of the stock market. Due to his research, Max is chased by a Wall Street company with obvious interest in the results of his studies, and by a Chasidic Torah scholar, who believes that this long string of numbers is a code sent from God.` }
	]),
	movies: List([
		{ title: "Armageddon", year: 1998, id: lastId++, plotSummary: `It is just another day at the National Aeronautics and Space Administration (NASA), a few astronauts were repairing a satellite until, out of nowhere, a series of asteroids came crashing into the shuttle, destroying it. These asteroids also decimated New York soon thereafter. Then, NASA discovered that there is an asteroid roughly the size of Texas heading towards the Earth, and when it does hit the Earth, the planet itself and all of its inhabitants will be obliterated, worse, the asteroid will hit the Earth in 18 days. Unfortunately, NASA's plans to destroy the asteroid are irrelevant. That is when the U.S. military decides to use a nuclear warhead to blow the asteroid to pieces. Then, scientists decide to blow the asteroid with the warhead inside the asteroid itself. The only man to do it, is an oil driller named Harry Stamper and his group of misfit drillers and geologists. As he and his drill team prepare for space excavation, the asteroid is still heading towards the Earth. When the crew are launched into outer space, they are determined to destroy this asteroid.` },
		{ title: "Heat", year: 1995, id: lastId++, plotSummary: `Neil McCauley is a thief... an expert thief... one of the best. His philosophy in life - become attached to nothing in life that you can't walk away from in 30 seconds if you spot the "Heat" around the corner. His crew of criminals is a high-tech outfit pulling off professional jobs that impress even the likes of Detective Vincent Hanna. But Hanna, a man driven through life only by his work, becomes obsessed, at the expense of his private life, with bringing McCauley down. As McCauley's crew prepare for the score of a lifetime, and Hanna's team tries to bring him in, the two find that they are challenged by the greatest minds on the opposite side of the law that either one has ever encountered.` },
		{ title: "Shrek", year: 2001, id: lastId++, plotSummary: `When a green ogre named Shrek discovers his swamp has been 'swamped' with all sorts of fairytale creatures by the scheming Lord Farquaad, Shrek sets out with a very loud donkey by his side to 'persuade' Farquaad to give Shrek his swamp back. Instead, a deal is made. Farquaad, who wants to become the King, sends Shrek to rescue Princess Fiona, who is awaiting her true love in a tower guarded by a fire-breathing dragon. But once they head back with Fiona, it starts to become apparent that not only does Shrek, an ugly ogre, begin to fall in love with the lovely princess, but Fiona is also hiding a huge secret.` }
	]),
	lastId
};
defaultState.lastId = lastId;

try {
	let localState = localStorage.getItem("__MOVIE_LIST");
	if (localState) {
		defaultState = JSON.parse(localState);
		defaultState = {
			favorites: List(defaultState.favorites),
			movies: List(defaultState.movies),
			lastId: defaultState.lastId
		}
	}
} catch (e) { }

addMovie.lastId = defaultState.lastId;
const store = createStore(reducer, defaultState);

store.subscribe(() => {
	let { movies, favorites } = store.getState();
	localStorage.setItem("__MOVIE_LIST", JSON.stringify({
		movies: movies.toArray(),
		favorites: favorites.toArray(),
		lastId: addMovie.lastId
	}))
})

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);