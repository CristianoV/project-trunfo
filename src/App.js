import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: true,
      // hasTrunfo: true,
      isSaveButtonDisabled: false,
    };
  }

  inputChange = ({ target }) => {
    const { name } = target;
    this.setState({ [name]: target.value });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.inputChange } />
      </div>
    );
  }
}

export default App;
