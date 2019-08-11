import React from 'react';
import { capitalise } from '../helpers';

const Result = ({ winner, roll, topic }) => (
  <div className="result">
    <h3 className="topic">{topic}</h3>
    {winner && <h3>{`${capitalise(roll)}! ${winner} wins!`}</h3>}
  </div>
);

export default Result;
