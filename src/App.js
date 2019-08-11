import React, { Component } from 'react';

import Confetti from 'react-confetti';
import FieldContainer from './components/FieldContainer';
import FieldHuman from './components/FieldHuman';
import FieldHeadsTails from './components/FieldHeadsTails';
import FieldTopic from './components/FieldTopic';
import FieldButton from './components/FieldButton';
import Result from './components/Result';

class App extends Component {
  state = {
    humans: {
      human1: {
        key: 1,
        name: '',
        choice: 'heads',
      },
      human2: {
        key: 2,
        name: '',
        choice: 'tails',
      },
    },
    winner: '',
    topic: '',
    roll: '',
    confetti: false,
  };

  /*
   * Handle the topic update.
   */
  updateTopic = (value) => {
    let { topic } = this.state;
    topic = value;

    this.setState({
      topic,
    });
  };

  /*
   * Handle a human name change.
   */
  updateHumanName = (value, key) => {
    this.setState((prevState) => {
      const objectKey = `human${key}`;
      const human = { ...prevState.humans[objectKey] };
      human.name = value;
      return {
        humans: {
          ...prevState.humans,
          [objectKey]: human,
        },
      };
    });
  };

  /*
   * Handle a human choice change.
   */
  updateHumanChoice = (value, key) => {
    this.setState((prevState) => {
      const targetHumanKey = `human${key}`;
      const otherHumanKey = key === 1 ? 'human2' : 'human1';
      const targetHuman = { ...prevState.humans[targetHumanKey] };
      const otherHuman = { ...prevState.humans[otherHumanKey] };
      targetHuman.choice = value;
      otherHuman.choice = value === 'heads' ? 'tails' : 'heads';

      return {
        humans: {
          ...prevState.humans,
          [targetHumanKey]: targetHuman,
          [otherHumanKey]: otherHuman,
        },
      };
    });
  };

  makeARoll = (roll) => {
    this.setState((prevState) => {
      const { humans } = prevState;
      const winnerHuman = Object.values(humans).find((human) => human.choice === roll);
      const winner = winnerHuman.name;

      return { roll, winner, confetti: true };
    });
  };

  render() {
    const {
      winner, roll, topic, humans, confetti,
    } = this.state;
    const { tagline } = this.props;
    return (
      <div className="wrapper">
        {confetti ? (
          <Confetti
            onConfettiComplete={() => {
              this.setState(() => ({ confetti: false }));
            }}
            recycle={false}
            run
            width={window.innerWidth}
            height={window.innerHeight}
          />
        ) : null}
        <h1 className="title">{tagline}</h1>
        {Object.values(humans).map((human) => (
          <FieldContainer key={human.key}>
            <FieldHuman human={human} updateHumanName={this.updateHumanName} />
            <FieldHeadsTails human={human} updateHumanChoice={this.updateHumanChoice} />
          </FieldContainer>
        ))}
        <FieldContainer>
          <FieldTopic topic={topic} updateTopic={this.updateTopic} />
        </FieldContainer>
        <FieldContainer>
          <FieldButton makeARoll={this.makeARoll} />
        </FieldContainer>
        <FieldContainer>
          <Result winner={winner} roll={roll} topic={topic} />
        </FieldContainer>
      </div>
    );
  }
}

export default App;
