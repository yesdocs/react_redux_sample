import React, { Component, PropTypes } from 'react';

export default class BigUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let user = this.props.user ;
      return (
              <div >
                <div className='user-top'>
                    <img src={user.get('image')} />
                    <h2>{user.get('name')} <span>{user.get('email')}</span></h2>
                    <address>{user.get('address')}</address>
                </div>     
                <div className='user-bottom'>
                    <h3>Bio</h3>
                    <p>{user.get('bio')}</p>
                </div>     
              </div>
            ); 
  }
}

BigUser.propTypes = {
    user: PropTypes.object.isRequired,
};
