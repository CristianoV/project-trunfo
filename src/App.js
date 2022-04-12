import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: true,
      isSaveButtonDisabled: true,
    };
  }

  ButtonDisabled = () => {
    const { cardName,
      cardDescription,
      cardImage, cardRare,
      cardAttr1, cardAttr2,
      cardAttr3 } = this.state;
    const total = 210;
    const maximo = 90;
    const minimo = 0;
    if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && parseInt(cardAttr1, 10) <= maximo
    && parseInt(cardAttr2, 10) <= maximo
    && parseInt(cardAttr3, 10) <= maximo
    && parseInt(cardAttr1, 10) >= minimo
    && parseInt(cardAttr2, 10) >= minimo
    && parseInt(cardAttr3, 10) >= minimo
    && (parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10)) <= total
    ) {
      return this.setState({ isSaveButtonDisabled: false });
    } return this.setState({ isSaveButtonDisabled: true });
  };

  inputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.ButtonDisabled());
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.inputChange }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
