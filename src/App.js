import React from "react";

class App extends React.Component{
  state = {
    count : 0,
  };

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will be unmounted");
  }

  add = () => {
    console.log('Add');
    this.setState(current => ({
      count : current.count + 1
    }));
  }

  minus = () => {
    console.log('Minus');
    this.setState({count : this.state.count -1});
  }

  render() {
    console.log("Component rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;