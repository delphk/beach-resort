import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../Context";

const getUnique = (items, value) => [
  ...new Set(items.map(item => item[value]))
];

const RoomsFilter = () => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    rooms,
    type,
    price,
    capacity,
    minPrice,
    maxPrice,
    breakfast,
    minSize,
    maxSize,
    pets
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, i) => (
    <option value={item} key={i}>
      {item}
    </option>
  ));
  let people = getUnique(rooms, "capacity");
  people = people.map((item, i) => (
    <option value={item} key={i}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            onChange={handleChange}
            min={minPrice}
            max={maxPrice}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <input
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSize"
            id="size"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
