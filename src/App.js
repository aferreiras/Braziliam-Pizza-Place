// arquivo App.js, criado pelo create-react-app, modificado
import React,{Component} from 'react';
import './App.css';
import SelectBar from "./selectBar"

class App extends Component {  
  constructor(){
    super()
    this.state = {
      value: ""
    }
    this.valueHandler = this.valueHandler.bind(this)
  }
  
  valueHandler({target}){
    this.setState({
      value:target.value
    })
    
  }
  render() {
  
    return (
      <div  >
        <SelectBar changed={this.valueHandler} />
        {/* <RecipeQuantity />
        <RecipeInstructions /> */}
      </div>
    );
  }
}

export default App;