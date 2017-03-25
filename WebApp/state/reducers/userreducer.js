import { fromJS, Map, List } from 'immutable';
import AppStore from '../webappstate';

// all action types defined here
export const userActions = {
    SET_USER: 'SET_USER', 
    SET_USER_LIST: 'SET_USER_LIST',
};

const urlservice = 'http://tw-namegen.herokuapp.com/names'; // names api

/*
    Actions
*/

// sets the current user
export function setCurrentUser(userid, username, useremail, useraddress, userimage, userbio) {
   AppStore.dispatch(
       createCurrentUserAction(userid, username, useremail, useraddress, userimage, userbio)
   );
};

// creates a SET_USER action
export function createCurrentUserAction(userid, username, useremail, useraddress, userimage, userbio) {
   return {
       type: userActions.SET_USER,
       id: userid,
       name: username,
       email: useremail,
       address: useraddress,
       image: userimage,
       bio: userbio ? userbio : ''
   };
};

// sets the current list of users
export function setUserList( usersList ) {
    AppStore.dispatch(createUserListAction(usersList));
}

// creates a SET_USER_LIST action
export function createUserListAction(userList) {
   return {
       type: userActions.SET_USER_LIST,
       users: userList
   };
};


// actually pulls data from the web site service
export function fetchUsers() {
    fetch(urlservice, {
        method: 'GET',
        cache: 'no-cache',
        mode: 'cors',
        error: function(resp) {
            alert(resp);
        }
    }).then(response => response.json())
      .then(json => { setUserList(json) });
};

// actually pulls data from the web site service
export function fetchUser(userid) {
    fetch(urlservice + '/' + userid, {
        method: 'GET',
        cache: 'no-cache',
        mode: 'cors',
        error: function(resp) {
            alert(resp);
        }
    }).then(response => response.json())
      .then(json => { 
          setCurrentUser(userid, json.name, json.email, json.address, json.image, json.bio) ;
       });
};
// default user state reducer
const userReducer = (state = Map({}), action = {type: ''}) => {
    switch( action.type )
    {
        case userActions.SET_USER:
           let lst = state.get('users');
           lst.map(function(it){
               if( it.id == action.id ) {
                //console.log('booyaa! ' + it.id);
                it.name = action.name,
                it.email = action.email,
                it.address = action.address,
                it.image = action.image;
                it.bio = action.bio;
               }
           });

           return state.set('user', Map({
                id: action.id,
                name: action.name,
                email: action.email,
                address: action.address,
                image: action.image,
                bio: action.bio
            }));
            
        case userActions.SET_USER_LIST:
            return state.set('users', List(action.users));
    }
    return state;
};

// setup the action type handles
export const initUserHandlers = (handlers) => {

    handlers[ userActions.SET_USER ] = userReducer;
    handlers[ userActions.SET_USER_LIST ] = userReducer;
    
    return handlers ;
}

export default userReducer;