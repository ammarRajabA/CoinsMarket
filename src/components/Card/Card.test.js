import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card.component';

describe("Testing Card component",()=>{
	it('renders correctly', () => {
		const wrapper = shallow(
    		<Card title={"Title"} />
    	);
		expect(wrapper).toMatchSnapshot();
	});
})