/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import recipes from '../data';

class PizzaHomePage extends Component {
  constructor() {
    super();
    this.state = {
      current: '',
      loading: true,
      currentRecipeData: {},
      newSize: 35,
      flourConversion: 250,
      waterConversion: 175,
      quantity: 1,
      newHidratation: 60,
    };
    this.selectedCreator = this.selectedCreator.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.returnRecipe = this.returnRecipe.bind(this);
    this.sizeClick = this.sizeClick.bind(this);
    this.quantityClick = this.quantityClick.bind(this);
    this.hidratationClick = this.hidratationClick.bind(this);
  }

  clickHandler({ target }) {
    this.setState({
      current: target.value,
      loading: false,
      currentRecipeData: { ...recipes.filter((element) => (element.id === target.value))[0] },
    });
  }

  sizeClick({ target }) {
    const { newSize } = this.state;
    return target.id === 'plusSize' ? this.setState({ newSize: newSize + 1 }) : this.setState({ newSize: newSize - 1 });
  }

  quantityClick({ target }) {
    const { quantity } = this.state;
    return target.id === 'plusQuantity' ? this.setState({ quantity: quantity + 1 }) : this.setState({ quantity: quantity - 1 });
  }

  hidratationClick({ target }) {
    const { newHidratation } = this.state;
    return target.id === 'plusHidratation' ? this.setState({ newHidratation: newHidratation + 1 }) : this.setState({ newHidratation: newHidratation - 1 });
  }

  returnRecipe() {
    const {
      currentRecipeData, newHidratation, newSize, quantity,
    } = this.state;
    return (
      <h1>
        Estilo
        {currentRecipeData.id}
        <form>
          <label htmlFor="plusQuantity minusQuantity">
            Quantity
            { quantity }
            <button type="button" id="plusQuantity" onClick={this.quantityClick}>+</button>
            <button type="button" id="minusQuantity" onClick={this.quantityClick}>-</button>
          </label>
          <label htmlFor="plusSize minusSize">
            Hidratation
            { newHidratation }
            <button type="button" id="plusHidratation" onClick={this.hidratationClick}> + </button>
            <button type="button" id="minusHidratation" onClick={this.hidratationClick}> - </button>

          </label>
          <label htmlFor="plusSize minusSize">
            Size
            { newSize }
            <button type="button" id="plusSize" onClick={this.sizeClick}> + </button>
            <button type="button" id="minusSize" onClick={this.sizeClick}> - </button>
          </label>
        </form>
      </h1>
    );
  }
  // <option value={option.value} selected={optionsState == option.value}>{option.label}</option>

  selectedCreator() {
    return (
      <form>
        <select name="current" onChange={this.clickHandler}>
          <option selected value="">Choose</option>
          <option value="NY">NewYork</option>
          <option value="BR">Brazil</option>
          <option value="CN">Chinese</option>
        </select>
      </form>
    );
  }
  // quantityCreator(){

  // }

  render() {
    const { current, loading } = this.state;
    const loadingLogo = <h1>LOADING ...</h1>;
    return (
      <>
        {this.selectedCreator()}

        { loading && loadingLogo }
        {current.length > 1 && this.returnRecipe(current)}
      </>
    );
  }
}
export default PizzaHomePage;
