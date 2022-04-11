import React from 'react';
import './cartinhas.css';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form id="form">
          <label htmlFor="nomeCarta" name="nome">
            Nome da carta:
            <input type="text" id="nomeCarta" data-testid="name-input" />
          </label>
          <label htmlFor="descricaoDaCarta">
            Descrição da carta:
            <input
              type="email"
              id="descricaoDaCarta"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="atributo1">
            Primeiro atributo da Carta:
            <input type="number" id="atributo1" data-testid="attr1-input" />
          </label>
          <label htmlFor="atributo2">
            Segundo atributo da Carta:
            <input type="number" id="atributo2" data-testid="attr2-input" />
          </label>
          <label htmlFor="atributo3">
            Terceiro atributo da Carta:
            <input type="number" id="atributo3" data-testid="attr3-input" />
          </label>
          <label htmlFor="imagemCarta">
            Imagem da carta:
            <input type="text" name="" id="imagemCarta" data-testid="image-input" />
          </label>
          <label htmlFor="Raridade">
            Raridade:
            <select name="" id="Raridade" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trunfo
            <input type="checkbox" name="" id="trunfo" data-testid="trunfo-input" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}
