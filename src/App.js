import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import RemoveCard from './components/removeCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cards: [],
      hasTrunfo: false,
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

  makeCards = (state) => ({
    cardName: state.cardName,
    cardDescription: state.cardDescription,
    cardAttr1: state.cardAttr1,
    cardAttr2: state.cardAttr2,
    cardAttr3: state.cardAttr3,
    cardImage: state.cardImage,
    cardRare: state.cardRare,
    cardTrunfo: state.cardTrunfo,
  });

  SaveButtonClick = (event) => {
    event.preventDefault();
    const cardList = this.makeCards(this.state);
    this.setState((prevState) => (
      {
        cards: [...prevState.cards, cardList],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        hasTrunfo: cardList.cardTrunfo,
        cardImage: '',
        cardRare: 'normal',
        isSaveButtonDisabled: true,
      }));
  }

  deletedCard = (remove) => {
    this.setState((prevState) => (
      {
        hasTrunfo: prevState.cards.some((cartinha) => cartinha.cardTrunfo === false),
        cards: prevState.cards.filter((cartinha) => cartinha.cardName !== remove),
      }));
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.inputChange }
          onSaveButtonClick={ this.SaveButtonClick }
        />
        <Card { ...this.state } />
        { cards[0] && cards.map((cartas, index) => (
          <div key={ `card-${index}` }>
            <Card { ...cartas } />
            <RemoveCard
              { ...this.state }
              key={ `remove-${index}` }
              remove={ () => this.deletedCard(cartas.cardName) }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
