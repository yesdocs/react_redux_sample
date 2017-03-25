import { fromJS, Map, List } from 'immutable';
import {expect} from 'chai';

import { defaultAppState } from '../webappstate';
import userReducer, { createCurrentUserAction, createUserListAction } from './userreducer';

describe('User Reducer', () => {

    it('can set the current user', () => {
        let testuser = {
            id: "5aa8f372-1465-49b1-9214-6e4810fa1197",
            name:"Marie Swift",
            email:"Hermann_Paucek@yahoo.com",
            address:"38100 Joey Bridge",
            image:"https://s3.amazonaws.com/uifaces/faces/twitter/joeymurdah/128.jpg",
            bio: ''
        };
        let result = userReducer(defaultAppState, createCurrentUserAction(testuser.id, testuser.name, testuser.email, testuser.address, testuser.image));
        
        expect( Map(testuser) ).to.equal(result.get("user"));
    });

    it('can set the current user with a bio', () => {
        let testuser = {
            id: "5aa8f372-1465-49b1-9214-6e4810fa1197",
            name:"Marie Swift",
            email:"Hermann_Paucek@yahoo.com",
            address:"38100 Joey Bridge",
            image:"https://s3.amazonaws.com/uifaces/faces/twitter/joeymurdah/128.jpg",
            bio: 'Loerm ipsum'
        };
        let result = userReducer(defaultAppState, createCurrentUserAction(testuser.id, testuser.name, testuser.email, testuser.address, testuser.image, testuser.bio));
        
        expect( Map(testuser) ).to.equal(result.get("user"));
    });
    it('can set the list of users', () => {
        let testusers = [
            {"id":"5aa8f372-1465-49b1-9214-6e4810fa1197","name":"Marie Swift","email":"Hermann_Paucek@yahoo.com","address":"38100 Joey Bridge","image":"https://s3.amazonaws.com/uifaces/faces/twitter/joeymurdah/128.jpg"},
            {"id":"60f7fb76-9638-431b-ad57-e642af1773f4","name":"Jayden Schulist","email":"Edwina.Steuber@gmail.com","address":"102 Bayer Manor","image":"https://s3.amazonaws.com/uifaces/faces/twitter/Shriiiiimp/128.jpg"},
            {"id":"e333b1ad-2ab7-4cb3-848d-14f6710e6cae","name":"Noe Weimann Dr.","email":"Ivory31@gmail.com","address":"9452 Ullrich Harbors","image":"https://s3.amazonaws.com/uifaces/faces/twitter/moynihan/128.jpg"},
            {"id":"76ed332f-8cf0-4150-8757-38dcf62a3053","name":"Allie Howell","email":"Oma66@hotmail.com","address":"0259 Ivy Field","image":"https://s3.amazonaws.com/uifaces/faces/twitter/fran_mchamy/128.jpg"},
            {"id":"81a3bfa6-368e-4c4a-b80f-8f1b36b82ea8","name":"Yasmine Goyette Ms.","email":"Hugh.Rippin@hotmail.com","address":"679 Boyle Locks","image":"https://s3.amazonaws.com/uifaces/faces/twitter/jodytaggart/128.jpg"}];
        let result = userReducer(defaultAppState, createUserListAction(testusers));
        
        expect( List(testusers) ).to.equal(result.get("users"));
    });
});