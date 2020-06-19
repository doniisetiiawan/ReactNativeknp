/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ContactItem from './ContactItem';

const data = [
  { id: 1, name: 'Crysfel Villa' },
  { id: 2, name: 'Stan Bershadskiy' },
  { id: 3, name: 'Brice Mason' },
  { id: 4, name: 'Sarah McFly' },
];

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: data,
      swiping: false,
    };
  }

  onToggleSwipe = () => {
    this.setState({ swiping: !this.state.swiping });
  };

  onRemoveContact = (contact) => {
    const index = data.findIndex(
      (item) => item.id === contact.id,
    );
    data.splice(index, 1);

    this.setState({
      dataSource: data,
    });
  };

  renderItem = (contact) => (
    <ContactItem
      contact={contact}
      onRemove={(contact) => {
        this.onRemoveContact(contact);
      }}
      onDragEnd={() => this.onToggleSwipe()}
      onDragStart={() => this.onToggleSwipe()}
    />
  );

  render() {
    const { dataSource } = this.state;

    return (
      <FlatList
        keyExtractor={(dataSource) => dataSource.id.toString()}
        data={dataSource}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ContactList;
