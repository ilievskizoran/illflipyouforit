import React from 'react';

const FieldHeadsTails = ({ human, updateHumanChoice }) => (
  <div className="field__group headsTails">
    <input
      className="checkbox"
      type="radio"
      name={human.key}
      value="heads"
      id={`heads${human.key}`}
      checked={human.choice === 'heads'}
      onChange={(e) => {
        updateHumanChoice(e.currentTarget.value, human.key);
      }}
    />
    <label htmlFor={`heads${human.key}`}>Heads</label>
    <input
      className="checkbox"
      type="radio"
      name={human.key}
      value="tails"
      id={`tails${human.key}`}
      checked={human.choice === 'tails'}
      onChange={(e) => {
        updateHumanChoice(e.currentTarget.value, human.key);
      }}
    />
    <label htmlFor={`tails${human.key}`}>Tails</label>
  </div>
);

export default FieldHeadsTails;
