import React from 'react';

const FieldTopic = ({ topic, updateTopic }) => (
  <div className="field__group">
    <label htmlFor="topic">What are you flipping for?</label>
    <input
      id="topic"
      type="text"
      name="topic"
      value={topic}
      onChange={(e) => {
        updateTopic(e.currentTarget.value);
      }}
      placeholder="What are you flipping for?"
    />
  </div>
);

export default FieldTopic;
