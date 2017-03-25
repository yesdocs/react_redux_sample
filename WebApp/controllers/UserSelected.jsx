import React, { Component, PropTypes } from 'react';

import BigUser from '../components/BigUser';

export default class UserSelected extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let user = this.props.user ;
      if( user === undefined || user.get('id') == '')
        return (<div className='rightpane'>
                    <p>Select a user</p>
                </div>); 
      return (
            <div className='rightpane'>
                <BigUser user={user} />
            </div>); 
  }
}

UserSelected.propTypes = {
    user: PropTypes.object.isRequired,
};
