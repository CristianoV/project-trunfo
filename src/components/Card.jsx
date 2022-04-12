import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
    superTrunfo = (value) => {
      if (value === true) {
        return <p data-testid="trunfo-card">Super Trunfo</p>;
      }
    };

    render() {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo } = this.props;
      return (
        <div>
          <p data-testid="name-card">{ cardName }</p>
          <img
            src={ cardImage }
            value={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="trunfo-card">{ cardRare }</p>
          { this.superTrunfo(cardTrunfo) }
        </div>
      );
    }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
