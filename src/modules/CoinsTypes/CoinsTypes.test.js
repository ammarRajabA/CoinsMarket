import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from "sinon"

import {CoinsTypes} from './CoinsTypes.component';

const mockStore = configureStore([thunk]);

const initialState = {
	coinsTypes: {
		loading: false,
		types: [],
	},
};

describe('Testing CoinsTypes module', () => {
	it('mounts and renders', () => {
		CoinsTypes.prototype.componentDidMount = jest.fn(e => e);
		CoinsTypes.prototype.render = jest.fn(e => e);
		mount(<CoinsTypes coinsTypes={initialState}/>);
		const spy = sinon.spy(CoinsTypes.prototype, "componentDidMount");
		const spyRender = sinon.spy(CoinsTypes.prototype, "render");
		expect(spy).toHaveBeenCalledTimes(1);
		expect(spyRender).toHaveBeenCalledTimes(1);
	});
});