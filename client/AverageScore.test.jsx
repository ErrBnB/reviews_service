import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import AverageScore from './AverageScore.jsx';

describe('AverageScore testing', function() {
	it('AverageScore should includes ', function() {
		const props = {}
		expect(shallow(<AverageScore />).contains(<p>show average score</p>)).toBe(true);
	})
});




