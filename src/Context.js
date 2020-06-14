import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    price: 0,
    capacity: 0,
    minSize: 0,
    maxSize: 0,
    minPrice: 0,
    maxPrice: 0,
    breakfast: false,
    pets: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "fields.price"
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured);
      let maxPrice = Math.max(...rooms.map(room => room.price));
      let maxSize = Math.max(...rooms.map(room => room.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = e => {
    let { type, checked, value, name } = e.target;
    value = type === "checkbox" ? checked : value;
    this.setState({ [name]: value }, this.filterRooms);
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    if (type !== 1)
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    tempRooms = tempRooms.filter(room => room.price <= price);
    tempRooms = tempRooms.filter(
      room => room.size <= maxSize && room.size >= minSize
    );
    if (breakfast)
      tempRooms = tempRooms = tempRooms.filter(room => room.breakfast);
    if (pets) tempRooms = tempRooms = tempRooms.filter(room => room.pets);
    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

// HOC
export const withRoomConsumer = Component => props => (
  <RoomConsumer>
    {value => <Component {...props} context={value} />}
  </RoomConsumer>
);
