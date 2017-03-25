import { fromJS, Map, List } from 'immutable';
import {expect} from 'chai';

import {defaultAppState } from './webappstate';

describe('Default App State', () => {

    it('has a user property', () => {
        let user = defaultAppState.get('user');
        expect( user ).to.be.ok
    });
    it('has a list of users', () => {
        let users = defaultAppState.get('users');
        expect( users ).to.be.ok
    });
});