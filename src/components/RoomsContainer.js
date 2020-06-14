import React from "react";
import RoomsFilter from "./RoomsFilter.js";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import { withRoomConsumer } from "../Context";
// import { RoomConsumer } from "../Context";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) return <Loading />;
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};
// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) return <Loading />;
//         return (
//           <div>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

export default withRoomConsumer(RoomContainer);
