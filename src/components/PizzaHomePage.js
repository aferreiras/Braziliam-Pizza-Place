import React, { Component } from 'react';
import recipes from '../data'

class PizzaHomePage extends Component {
       constructor() {
              super();
              this.state = {
                     current:undefined,
                     loading:true,
              }
              this.selectedCreator = this.selectedCreator.bind(this);
              this.clickHandler = this.clickHandler.bind(this);
              this.returnRecipe = this.returnRecipe.bind(this);


       }
       clickHandler({ target }) {
              this.setState({
                     current: target.value,
                     loading : false,
              })

       }
       returnRecipe(id){
              let newArray =  recipes.filter((element)=> (element.id === id));
              return newArray;

       }
       selectedCreator() {
              return (
                     <form>
                            <select name="current" onChange={this.clickHandler} >
                                   <option selected="selected" value="NY">NewYork</option>
                                   <option value="BR">Brazil</option>
                                   <option value="CH">Chinese</option>
                            </select>
                     </form>
              )
       }
       render() {
              const{ current,loading } = this.state;
               let finalRecipe = this.returnRecipe(current)
               let loadingLogo = <h1>LOADING ...</h1>
               let flourzin = <h1>{finalRecipe.water}</h1>

              return (
                     <>
                            {this.selectedCreator()}
                            { loading? loadingLogo : flourzin }
                     </>
              )
       }
}
export default PizzaHomePage;
