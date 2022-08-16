import React from "react";
import { useState } from "react";

export default function ChoreForm({ addChoreLog }) {
  const [choreDesc, setChoreDesc] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();

  const handleFormSubmit = (e) => {
    addChoreLog([choreDesc, name, date]);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Chore Form Page</h1>
      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <label>Chore Description</label>
        <br />
        <input
          name="choreDesc"
          type="text"
          value={choreDesc}
          onChange={(e) => setChoreDesc(e.target.value)}
        />
        <br />
        <label>Name</label>
        <br />
        <input
          name="userName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Date</label>
        <br />
        <input
          name="dt"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <input type="submit" value="Add Log" />
      </form>
    </div>
  );
}
