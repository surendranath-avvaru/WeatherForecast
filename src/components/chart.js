import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function low(data) {
	return (_.min(data));
}

function average(data) {
	return _.round(_.sum(data)/data.length);
}

function high(data) {
	return (_.max(data));
}

export default (props) => {
	return (
		<div>
			<Sparklines data={props.data} height={100} width={150}>
				<SparklinesReferenceLine type="avg" />
				<SparklinesLine color={props.color} />
			</Sparklines>
			<div className="unitLabels">
			<div><b>Min:</b> {low(props.data)} {props.units}</div>
			<div><b>Avg:</b> {average(props.data)} {props.units}</div>
			<div><b>Max:</b> {high(props.data)} {props.units}</div>
			</div>
		</div>
	);
}