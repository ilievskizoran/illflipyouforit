import React from 'react';
import { roll } from '../helpers';

const FieldTopic = ({ makeARoll }) => (
  <div className="field__group">
    <button
      type="button"
      name="button"
      onClick={() => {
        makeARoll(roll());
      }}
    >
      Flip
    </button>
  </div>
);

export default FieldTopic;
