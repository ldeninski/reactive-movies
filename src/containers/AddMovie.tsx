import * as React from "react";
import * as Redux from "redux";
import { HTMLElementWithValue } from "../Interface";
import { connect } from "react-redux";
import { addMovie } from "../actions/movie";

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => ({
	onAddMovie: (titleNode: HTMLElementWithValue, yearNode: HTMLElementWithValue, plotSummaryNode: HTMLElementWithValue) => {
		dispatch(addMovie(titleNode.value, +yearNode.value, plotSummaryNode.value));
		titleNode.value = yearNode.value = plotSummaryNode.value = "";
	}
})

@connect(null, mapDispatchToProps)		// single prop/callback no need for complexity - use decorator
export class AddMovie extends React.Component<any, any> {
	render() {
		let titleNode: HTMLInputElement;
		let yearNode: HTMLInputElement;
		let plotSummaryNode: HTMLTextAreaElement;
		let { onAddMovie } = this.props;

		return (
			<div className="row">
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="form-group">
								<label>Заглавие</label>
								<input className="form-control" type="text" ref={node => { titleNode = node; }} />
							</div>
							<div className="form-group">
								<label>Година</label>
								<input className="form-control" type="number" ref={node => { yearNode = node; }} />
							</div>
							<div className="form-group">
								<label>Кратко описание</label>
								<textarea className="form-control" type="text" ref={node => { plotSummaryNode = node; }} />
							</div>
							<button className="btn btn-primary" onClick={() => onAddMovie(titleNode, yearNode, plotSummaryNode)}>Добави</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
