// arquivo App.js, criado pelo create-react-app, modificado
import React,{Component} from 'react';


class SelectBar extends Component {
 
  render() {
    const {changed} = this.props;

    return (
      <form>
          <label>PizzaStyle
              <select onChange={changed}>
                  <option value="NY">Newyork</option>
                  <option value="BR">Brasileira</option>
                  <option value="FR">Francesa</option>
                  <option value="CUDOCONDE">cudoconde</option>

              </select>
          </label>
      </form>
      
    );
  };
}

export default SelectBar;