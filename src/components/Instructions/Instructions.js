import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { INSTRUCTIONS, RECIPES, RESET } from "../../store";

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: [],
      input: "",
      store: store.getState()
    };
  }
  componentDidMount(){
    store.subscribe(() => {
      store.getState()
    })
      this.setState({
        instructions: this.state.store.instructions
    })
  }
  handleChange(val) {
    this.setState({
      input: val
    });
  }
  addInstruction() {
    // Send data to Redux state
    store.dispatch({type: INSTRUCTIONS, payload: this.state.input})
    this.setState({
      input: ""
    });
  }
  create() {
    // Create new recipe in Redux state
    store.dispatch({type: RECIPES})
    store.dispatch({type:RESET})
  }
  render() {
    const instructions = this.state.instructions.map((instruction, i) => {
      return <li key={i}>{instruction}</li>;
    });
    return (
      <div className="List forms">
        <h2>Instructions:</h2>
        <div className="form_items_container">
          <ol className='list'>{instructions}</ol>
        </div>
        <div className="add_container">
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
          />
          <button className="add_button" onClick={() => this.addInstruction()}>
            Add Instruction
          </button>
        </div>
        <Link to="/add/ingredients">
          <button className='left_button'>Previous</button>
        </Link>
        <Link to="/">
          <button className='right_button' onClick={() => this.create()}>Create</button>
        </Link>
      </div>
    );
  }
}

export default Instructions;
