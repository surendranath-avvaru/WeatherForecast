import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return (
		<div>
			<Sparklines data={props.data} height={120} width={180}>
				<SparklinesReferenceLine type="avg" />
				<SparklinesLine color={props.color} />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}