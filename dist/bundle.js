/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["NEW"] = 0] = "NEW";
    ActionTypes[ActionTypes["DELETE"] = 1] = "DELETE";
    ActionTypes[ActionTypes["FAV"] = 2] = "FAV";
    ActionTypes[ActionTypes["UNFAV"] = 3] = "UNFAV";
    ActionTypes[ActionTypes["UPVOTE"] = 4] = "UPVOTE";
    ActionTypes[ActionTypes["DOWNVOTE"] = 5] = "DOWNVOTE";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
// action creators
exports.addMovie = (() => {
    let addMovie = (title, year, plotSummary) => {
        return { type: ActionTypes.NEW, title, year, plotSummary, id: addMovie.lastId++ };
    };
    addMovie.lastId = 0;
    return addMovie;
})();
exports.deleteMovie = (id, stateKey) => ({ type: ActionTypes.DELETE, id, stateKey });
exports.upVoteMovie = (id, stateKey) => ({ type: ActionTypes.UPVOTE, id, stateKey });
exports.downVoteMovie = (id, stateKey) => ({ type: ActionTypes.DOWNVOTE, id, stateKey });
exports.favMovie = (id) => ({ type: ActionTypes.FAV, id });
exports.unfavMovie = (id) => ({ type: ActionTypes.UNFAV, id });


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const MovieItem_1 = __webpack_require__(9);
exports.MovieList = (_a) => {
    var { listTitle, movies } = _a, props = __rest(_a, ["listTitle", "movies"]);
    return React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-md-12" },
            React.createElement("div", { className: "panel panel-primary" },
                React.createElement("div", { className: "panel-heading" }, listTitle),
                React.createElement("div", { className: "panel-body" }, movies.map((movie, index) => React.createElement(MovieItem_1.MovieItem, Object.assign({ key: movie.id }, movie, props, { isFirst: index == 0, isLast: index > movies.size - 2 })))))));
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const AddMovie_1 = __webpack_require__(10);
const SortedMovieList_1 = __webpack_require__(12);
const OrderedMovieList_1 = __webpack_require__(11);
exports.App = () => React.createElement("div", { className: "container-fluid" },
    React.createElement(AddMovie_1.AddMovie, null),
    React.createElement(OrderedMovieList_1.OrderedMovieList, { stateKey: "favorites", listTitle: "Любими" }),
    React.createElement("hr", null),
    React.createElement(SortedMovieList_1.SortedMovieList, { stateKey: "movies", listTitle: "Всички" }));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = __webpack_require__(0);
const movieSorter = (movieA, movieB) => movieA.title.toLocaleLowerCase() > movieB.title.toLocaleLowerCase() ? 1 : -1;
function movies(state, action) {
    switch (action.type) {
        case movie_1.ActionTypes.NEW:
            return Object.assign({}, state, { movies: state.movies.push({ id: action.id, title: action.title, year: action.year, plotSummary: action.plotSummary })
                    .sort(movieSorter) });
        case movie_1.ActionTypes.DELETE:
            return Object.assign({}, state, { [action.stateKey]: state[action.stateKey].filter((movie) => movie.id != action.id) });
        case movie_1.ActionTypes.FAV: {
            let favorited;
            return Object.assign({}, state, { movies: state.movies.filter((movie) => movie.id == action.id ? (favorited = movie, false) : true), favorites: favorited ? state.favorites.push(favorited) : state.favorites });
        }
        case movie_1.ActionTypes.UNFAV: {
            let unfavorited;
            return Object.assign({}, state, { favorites: state.favorites.filter((movie) => movie.id == action.id ? (unfavorited = movie, false) : true), movies: unfavorited ? state.movies.push(unfavorited).sort(movieSorter) : state.movies });
        }
        case movie_1.ActionTypes.UPVOTE: {
            let list = state[action.stateKey];
            let index = list.findIndex((movie) => action.id == movie.id);
            if (index > 0) {
                list = list.withMutations((list) => {
                    let upvoted = list.get(index);
                    list.set(index, list.get(index - 1)).set(index - 1, upvoted);
                });
            }
            return Object.assign({}, state, { [action.stateKey]: list });
        }
        case movie_1.ActionTypes.DOWNVOTE: {
            let list = state[action.stateKey];
            let index = list.findIndex((movie) => action.id == movie.id);
            if (index < list.size - 1) {
                list = list.withMutations((list) => {
                    let downvoted = list.get(index);
                    list.set(index, list.get(index + 1)).set(index + 1, downvoted);
                });
            }
            return Object.assign({}, state, { [action.stateKey]: list });
        }
        default:
            return state;
    }
}
exports.movies = movies;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = Immutable;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
exports.MovieItem = props => {
    let { id, title, year, plotSummary, sorted, isFirst, isLast, favIconClass, favText } = props;
    let { onUpClick, onDownClick, onFavClick, onDelClick } = props;
    let ddNode;
    return (React.createElement("dl", null,
        React.createElement("dt", { className: "row" },
            React.createElement("span", { className: "col-xs-6 pointer", onClick: () => {
                    ddNode.style.display = (ddNode.style.display == "block" ? "" : "block"); // just a quick solution
                } },
                title,
                " (",
                year,
                ")"),
            React.createElement("div", { className: "col-xs-6 text-right" },
                sorted ? ("") : (React.createElement("span", null,
                    React.createElement("button", { disabled: isFirst, className: "btn btn-default", onClick: () => onUpClick(id) },
                        React.createElement("span", { className: "glyphicon glyphicon-arrow-up" })),
                    React.createElement("button", { disabled: isLast, className: "btn btn-default", onClick: () => onDownClick(id) },
                        React.createElement("span", { className: "glyphicon glyphicon-arrow-down" })))),
                React.createElement("button", { className: "btn btn-success", onClick: () => onFavClick(id) },
                    React.createElement("span", { className: favIconClass || '' }),
                    favText),
                React.createElement("button", { className: "btn btn-danger", onClick: () => onDelClick(id) },
                    React.createElement("span", { className: "glyphicon glyphicon-trash" })))),
        React.createElement("dd", { ref: (node) => ddNode = node }, plotSummary)));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const react_redux_1 = __webpack_require__(2);
const movie_1 = __webpack_require__(0);
const mapDispatchToProps = (dispatch) => ({
    onAddMovie: (titleNode, yearNode, plotSummaryNode) => {
        dispatch(movie_1.addMovie(titleNode.value, +yearNode.value, plotSummaryNode.value));
        titleNode.value = yearNode.value = plotSummaryNode.value = "";
    }
});
let AddMovie = class AddMovie extends React.Component {
    render() {
        let titleNode;
        let yearNode;
        let plotSummaryNode;
        let { onAddMovie } = this.props;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel panel-default" },
                    React.createElement("div", { className: "panel-body" },
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", null, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435"),
                            React.createElement("input", { className: "form-control", type: "text", ref: node => { titleNode = node; } })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", null, "\u0413\u043E\u0434\u0438\u043D\u0430"),
                            React.createElement("input", { className: "form-control", type: "number", ref: node => { yearNode = node; } })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", null, "\u041A\u0440\u0430\u0442\u043A\u043E \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                            React.createElement("textarea", { className: "form-control", type: "text", ref: node => { plotSummaryNode = node; } })),
                        React.createElement("button", { className: "btn btn-primary", onClick: () => onAddMovie(titleNode, yearNode, plotSummaryNode) }, "\u0414\u043E\u0431\u0430\u0432\u0438"))))));
    }
};
AddMovie = __decorate([
    react_redux_1.connect(null, mapDispatchToProps) // single prop/callback no need for complexity - use decorator
], AddMovie);
exports.AddMovie = AddMovie;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(2);
const MovieList_1 = __webpack_require__(3);
const movie_1 = __webpack_require__(0);
const mapStateToProps = (state, ownProps) => ({
    movies: state[ownProps.stateKey],
    sorted: false,
    favText: ownProps.favText,
    favIconClass: ownProps.favIconClass || "glyphicon glyphicon-star"
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onFavClick: (id) => {
        dispatch(movie_1.unfavMovie(id));
    },
    onDelClick: (id) => {
        dispatch(movie_1.deleteMovie(id, ownProps.stateKey));
    },
    onUpClick: (id) => {
        dispatch(movie_1.upVoteMovie(id, ownProps.stateKey));
    },
    onDownClick: (id) => {
        dispatch(movie_1.downVoteMovie(id, ownProps.stateKey));
    }
});
exports.OrderedMovieList = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MovieList_1.MovieList);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(2);
const MovieList_1 = __webpack_require__(3);
const movie_1 = __webpack_require__(0);
const mapStateToProps = (state, ownProps) => ({
    movies: state[ownProps.stateKey],
    sorted: true,
    favText: ownProps.favText,
    favIconClass: ownProps.favIconClass || "glyphicon glyphicon-star-empty"
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onFavClick: (id) => {
        dispatch(movie_1.favMovie(id));
    },
    onDelClick: (id) => {
        dispatch(movie_1.deleteMovie(id, ownProps.stateKey));
    }
});
exports.SortedMovieList = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MovieList_1.MovieList);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const immutable_1 = __webpack_require__(6);
const react_dom_1 = __webpack_require__(7);
const redux_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(2);
const movies_1 = __webpack_require__(5);
const movie_1 = __webpack_require__(0);
const App_1 = __webpack_require__(4);
let lastId = 0;
let defaultState = {
    favorites: immutable_1.List([
        { title: "PI", year: 1998, id: lastId++, plotSummary: `The mathematician Maximillian Cohen is tormented by a severe migraine since he was a kid, and he uses many pills to reduce his painful headaches. He is a lonely man, and his only friend is his former professor Sol Robeson. Max has the following assumptions, which rules his life: (1) Mathematics is the language of nature; (2) Everything around us can be represented and understood from numbers; (3) If you graph the numbers in any system, patterns emerge. Therefore there are patterns everywhere in nature. Based on these principles, Max is trying to figure out a system to predict the behavior of the stock market. Due to his research, Max is chased by a Wall Street company with obvious interest in the results of his studies, and by a Chasidic Torah scholar, who believes that this long string of numbers is a code sent from God.` }
    ]),
    movies: immutable_1.List([
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
            favorites: immutable_1.List(defaultState.favorites),
            movies: immutable_1.List(defaultState.movies),
            lastId: defaultState.lastId
        };
    }
}
catch (e) { }
movie_1.addMovie.lastId = defaultState.lastId;
const store = redux_1.createStore(movies_1.movies, defaultState);
store.subscribe(() => {
    let { movies, favorites } = store.getState();
    localStorage.setItem("__MOVIE_LIST", JSON.stringify({
        movies: movies.toArray(),
        favorites: favorites.toArray(),
        lastId: movie_1.addMovie.lastId
    }));
});
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1.App, null)), document.getElementById("app"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map