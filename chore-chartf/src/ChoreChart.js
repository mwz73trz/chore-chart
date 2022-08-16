import React from "react";

export default function ChoreChart(props) {
  return (
    <div>
      <h1>Chore Chart Page</h1>
      <table>
        <thead>
          <tr>
            <th>Chore Description</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        {props.chores.map((v, i) => {
          return (
            <tr>
              <th>{v[0]}</th>
              <th>{v[1]}</th>
              <th>{v[2]}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
