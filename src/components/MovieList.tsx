import * as React from "react";
import { List } from "immutable";
import { IMovie } from "../Interface";
import { MovieItem } from "./MovieItem";

interface Props {
	movies: List<IMovie>
	sorted: boolean
	favText: string
	faIconClass: string
	listTitle: string
	onFavClick: any
	onDelClick: any
	onUpClick: any
	onDownClick: any
}


export const MovieList: React.StatelessComponent<Props> = ({listTitle, movies, ...props}) =>
	<div className="row">
		<div className="col-md-12">
			<div className="panel panel-primary">
				<div className="panel-heading">{listTitle}</div>
				<div className="panel-body">
					{movies.map((movie: IMovie, index: number) =>
						<MovieItem key={movie.id} {...movie} {...props} isFirst={index == 0} isLast={index > movies.size - 2} />)
					}
				</div>
			</div>
		</div>
	</div>


