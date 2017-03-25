import React, { Component, PropTypes } from 'react';

export default class ListItemUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <li className={this.props.isSelected ? 'active' : ''} key={'li-' + this.props.user.id} onClick={this.props.clickAction} >
          <img src={this.props.user.image} />
          <h4>{this.props.user.name}</h4>
          <p>{this.props.user.email}</p>
        </li>); 
  }
}

ListItemUser.propTypes = {
    user: PropTypes.object.isRequired,
    clickAction: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
};
