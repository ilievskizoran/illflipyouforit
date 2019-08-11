import React from 'react';

const FieldHeadsTails = ({ human, updateHumanChoice }) => (
  <div className="field__group">
    <input
      type="radio"
      name={human.key}
      value="heads"
      checked={human.choice === 'heads'}
      onChange={(e) => {
        updateHumanChoice(e.currentTarget.value, human.key);
      }}
    />
    Heads
    <br />
    <input
      type="radio"
      name={human.key}
      value="tails"
      checked={human.choice === 'tails'}
      onChange={(e) => {
        updateHumanChoice(e.currentTarget.value, human.key);
      }}
    />
    Tails
    <br />
  </div>
);

export default FieldHeadsTails;
