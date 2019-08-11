import React from 'react';

const FieldHuman = ({ human, updateHumanName }) => (
  <div className="field__group">
    <label htmlFor="human1">{`Human ${human.key}`}</label>
    <div className="inputWrapper">
      <input
        id="human1"
        type="text"
        name={human.key}
        value={human.name}
        placeholder={`Human ${human.key}`}
        onChange={(e) => {
          updateHumanName(e.currentTarget.value, e.currentTarget.name);
        }}
      />
    </div>
  </div>
);

export default FieldHuman;
