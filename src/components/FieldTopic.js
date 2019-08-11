import React from 'react';

const FieldTopic = ({ topic, updateTopic }) => (
  <div className="field__group topicWrapper">
    <label htmlFor="topic">What are you flipping for?</label>
    <div className="inputWrapper">
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
  </div>
);

export default FieldTopic;
