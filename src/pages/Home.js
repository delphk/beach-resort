import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at $299"
        >
          <Link className="btn-primary" to="/rooms">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
};

export default Home;
