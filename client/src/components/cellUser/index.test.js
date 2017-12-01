import React from 'react';
import { shallow } from 'enzyme';
import CellUser from "./";

describe('renders', () => {
	it('cellUser component with default name', () => {
		const cellUser = shallow(<CellUser/>);
		expect(cellUser.length).toEqual(1);
		expect(cellUser.props().children).toEqual('');
	});

	it('cellUser component with name passed in props', () => {
		const userName = 'test';
		const cellUser = shallow(<CellUser name={userName}/>);
		expect(cellUser.props().children).toEqual(userName);
	});
})

