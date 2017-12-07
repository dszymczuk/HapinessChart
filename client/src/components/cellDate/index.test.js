import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import CellDate from "./";

it('renders CellDate', () => {
	const date = "23-11-2017";

	const cellDate = shallow(<CellDate date={date}/>);

	const formatedDate = moment(date, 'DD-MM-YYYY');
	const momentDay = formatedDate.format('DD');
	const momentMonth = formatedDate.format('MMMM');
	const momentYear = formatedDate.format('YYYY');

	const day = cellDate.find('.day');
	const month = cellDate.find('.month');
	const year = cellDate.find('.year');

	expect(cellDate.length).toEqual(1);

	expect(day.props().children).toEqual(momentDay);
	expect(month.props().children).toEqual(momentMonth);
	expect(year.props().children).toEqual(momentYear);
});