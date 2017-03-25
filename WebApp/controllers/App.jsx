import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import AppStore from '../state/webappstate';

/**
 * actions
 */
import { setUserList, fetchUsers } from '../state/reducers/userreducer' 

/**
 * Child controls
 */
import JustList from '../controllers/JustList';
import UserSelected from '../controllers/UserSelected';

/**
 *
 * Main App
 *
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }
    
   render() {
        return ( <section className='app-section'>
                    <JustList users={this.props.userlist} user={this.props.user} />
                    <UserSelected user={this.props.user} />
                </section> );
    }
}
/* End Main App */

/**
 *
 * app renderer
 *
 */
const renderapp = () => {
    let xUser = AppStore.getState().get('user');
    let xUserList = AppStore.getState().get('users');
    render(
           <App user={xUser} userlist={xUserList} />,
        document.getElementById('app')
        );
}

// subscribe to document changes and rerender
AppStore.subscribe(renderapp);

// request the users
fetchUsers();

renderapp(); // force at least one render

// viola, we are running!
