import 'react-native';
import React from 'react';
import {home} from '../home.reducer';
import * as types from '../../../constants/ActionTypes';

describe('Home Reducer', () => {
	it('has a default state', () => {
	    expect(home(undefined, {type: types.getNews})).toEqual({
	        news: null,
	    })
	});	
})
