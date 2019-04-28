import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store from "../../store"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      store: store.getState()
    };
  }
  componentDidMount(){
    store.subscribe(() => {
      store.getState()
    })
      this.setState({
        recipes: this.state.store.recipes
    })
  }
  deleteRecipe(id){
    console.log("Delete", id)
  }
  render() {
    
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          id = {i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          deleteRecipe = {this.deleteRecipe}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
