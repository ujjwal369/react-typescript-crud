import React, { useState } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { Players } from './Players';
import { Player } from '../types/types';
import { v4 as uuid } from 'uuid';

const App = () => {
  const initialData = [
    {
      id: uuid(),
      name: 'Bernd Leno',
      age: 28,
      position: 'Goalkeeper'
    }
  ];

  const [players, setPlayers] = useState(initialData);

  const addPlayer = (newPlayer: Player) => {
    newPlayer.id = uuid();
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = playerId => {
    const updatedPlayer = players.filter(player => playerId !== player.id);
    setPlayers(updatedPlayer);
  };

  const updatePlayer = (playerId, newData: Player) => {
    let updatedPlayer = players.map(player => {
      if (player.id === playerId) {
        return {
          id: player.id,
          name: newData.name,
          age: newData.age,
          position: newData.position
        };
      }
      return player;
    });
    setPlayers(updatedPlayer);
  };

  return (
    <div>
      <h1>Hi, again</h1>
      <AddPlayerForm addPlayer={addPlayer} />
      <Players
        players={players}
        deletePlayer={deletePlayer}
        updatePlayer={updatePlayer}
      />
    </div>
  );
};

export default App;
