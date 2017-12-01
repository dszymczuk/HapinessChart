import React from 'react';
import { shallow } from 'enzyme';
import { Emoji } from 'emoji-mart'
import CellHapiness from './';

it('renders CellHapiness component', () => {
	const cellHapiness = shallow(<CellHapiness/>);
	expect(cellHapiness.length).toEqual(1);
	expect(cellHapiness.props().className).toEqual("cellHapiness");
});

it('renders Emoji component in CellHapiness with default props', () => {
	const wrapper = shallow(<CellHapiness/>);
	const emoji = wrapper.find(Emoji);
	expect(emoji.length).toEqual(1);

	expect(emoji.props().emoji).toEqual("");
	expect(emoji.props().set).toEqual("messenger");
	expect(emoji.props().size).toEqual(40);
});

it('renders Emoji component in CellHapiness with custom props', () => {
	const wrapper = shallow(<CellHapiness emoji="smile" size={32} set="apple"/>);
	const emoji = wrapper.find(Emoji);
	expect(emoji.length).toEqual(1);

	expect(emoji.props().emoji).toEqual("smile");
	expect(emoji.props().set).toEqual("apple");
	expect(emoji.props().size).toEqual(32);
});