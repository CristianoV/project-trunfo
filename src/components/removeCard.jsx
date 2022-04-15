import React from 'react';
import PropTypes from 'prop-types';

export default class RemoveCard extends React.Component {
  render() {
    const { remove } = this.props;
    return (
      <button
        data-testid="delete-button"
        type="submit"
        onClick={ remove }
      >
        Excluir

      </button>
    );
  }
}

RemoveCard.propTypes = {
  remove: PropTypes.func.isRequired,
};
