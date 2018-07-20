import React from 'react';

export default function SelectedShelters(props) {
  const { shelters } = props;

  const shelterRows = shelters.map((shelter, idx) => (
    <tr
      key={idx}
      onClick={() => props.onShelterClick(idx)}
    >
      <td>{shelter.name}</td>
      <td>{shelter.beds}</td>
    </tr>
  ));

  return (
    <table className='ui selectable structured large table'>
      <thead>
        <tr>
          <th colSpan='5'>
            <h3>Selected shelters</h3>
          </th>
        </tr>
        <tr>
          <th className='eight wide'>Name</th>
          <th className='eight wide'>Beds</th>
        </tr>
      </thead>
      <tbody>
        {shelterRows}
      </tbody>
    </table>
  );
}
