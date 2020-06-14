import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Pabst pug tumblr gochujang offal retro cloud bread"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Pabst pug tumblr gochujang offal retro cloud bread"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Pabst pug tumblr gochujang offal retro cloud bread"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Pabst pug tumblr gochujang offal retro cloud bread"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, i) => (
            <article key={i} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
