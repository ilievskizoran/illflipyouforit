import React from 'react';
import { capitalise } from '../helpers';

const Result = ({ winner, roll, topic }) => (
  <div className="resultWrapper">
    <h3 className="topic">{topic}</h3>
    {winner && <h3>{`${capitalise(roll)}! ${winner} wins ${topic}!`}</h3>}
  </div>
);

export default Result;
