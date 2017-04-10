import * as React from "react";
import { IMovie } from "../Interface";
import { connect } from "react-redux";
import { deleteMovie } from "../actions/movie";

interface Props extends IMovie {
	sorted: boolean
	favText: string
	favIconClass?: string
	isFirst: boolean
	isLast: boolean
	onFavClick: any
	onDelClick: any
	onUpClick: any
	onDownClick: any
}

export const MovieItem: React.StatelessComponent<Props> = props => {
	let { id, title, year, plotSummary, sorted, isFirst, isLast, favIconClass, favText } = props;
	let { onUpClick, onDownClick, onFavClick, onDelClick } = props;
	let ddNode: HTMLElement;
	return (
		<dl>
			<dt className="row">
				<span className="col-xs-6 pointer" onClick={() => {
					ddNode.style.display = (ddNode.style.display == "block" ? "" : "block");	// just a quick solution
				}}>{title} ({year})
					</span>
				<div className="col-xs-6 text-right">
					{sorted ? ("") : (
						<span>
							<button disabled={isFirst} className="btn btn-default" onClick={() => onUpClick(id)}><span className="glyphicon glyphicon-arrow-up"></span></button>
							<button disabled={isLast} className="btn btn-default" onClick={() => onDownClick(id)}><span className="glyphicon glyphicon-arrow-down"></span></button>
						</span>
					)}
					<button className="btn btn-success" onClick={() => onFavClick(id)}>
						<span className={favIconClass || ''} />
						{favText}
					</button>
					<button className="btn btn-danger" onClick={() => onDelClick(id)}>
						<span className="glyphicon glyphicon-trash" />
					</button>
				</div>
			</dt>
			<dd ref={(node) => ddNode = node}>{plotSummary}</dd>
		</dl>
	)
}
