import React, { useState } from 'react';
import { FormProps } from './App';
import { Player } from './PlayerItem';

export const AddPlayerForm = ({ addPlayer }: FormProps) => {
  const initialValue: Player = {
    id: '',
    name: '',
    age: 0,
    position: ''
  };

  const [player, setPlayer] = useState(initialValue);

  const handleChange = e => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPlayer(player);
    setPlayer(initialValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter player name"
          onChange={handleChange}
          value={player.name}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter player age"
          onChange={handleChange}
          value={player.age}
        />
        <input
          type="position"
          name="position"
          placeholder="Enter player position"
          onChange={handleChange}
          value={player.position}
        />
        <button>ADD</button>
      </form>
    </>
  );
};
