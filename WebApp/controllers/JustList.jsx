import React, { Component, PropTypes } from 'react';

/**
 * actions
 */
import { setCurrentUser, fetchUser } from '../state/reducers/userreducer';

/**
 * components
 */
import ListItemUser from '../components/ListItemUser' ;

/**
 * JustList class of list items .. just a list
 */
export default class JustList extends React.Component {
  constructor(props) {
    super(props);
    this.onEachItem = this.onEachItem.bind(this);
    }

/**
 * handles the selecting of list items
 * @param {*the user list item} item 
 * @param {*the current event} event 
 */
  handleSelect(item, event) {
    setCurrentUser(item.id, item.name, item.email, item.address, item.image);
    fetchUser(item.id);
  }

/**
 * 
 * @param {*setup the binding of each item} item 
 */
  onEachItem(item) {
    let boundClick = this.handleSelect.bind(this, item);
    let isSel = this.props.user.get('id') == item.id ? true : false;
    return (<ListItemUser key={item.id} clickAction={boundClick} user={item} isSelected={isSel} />);
  }

  render() {
    if( this.props.users !== undefined ){
      return (
        <div className='leftpane'>
          <ul>
            {this.props.users.map(this.onEachItem)}
          </ul>
        </div>

      );
    }
    return (
      <h4>JustList With Out Users </h4>
    );
  }
}

JustList.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
};