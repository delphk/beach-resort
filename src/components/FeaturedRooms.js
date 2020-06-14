import React, { Component } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => <Room key={room.id} room={room} />);
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
