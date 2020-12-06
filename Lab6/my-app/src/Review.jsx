import React from 'react';
import Button from 'react-bootstrap/Button';

class Review extends React.Component {
    constructor(props) {
    // aby móc korzystać z konstruktora
      super(props);
    // przechowywanie wartości wejściowej
      this.state = {value: 'A New Hope'};
    // metody nie są przypisane domyślnie, bez tego wartość
    // po wywołaniu będzie undenfied
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // Kiedy zmienia się wartość
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    // Wyświetlanie w okienku i konsoli wyniku
    handleSubmit(event) {
      alert('Your favourite Star Wars movie is --' + this.state.value + '--');
      console.log('Your favourite Star Wars movie is -' + this.state.value + '-');
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <h4>Pick your favourite Star Wars movie:</h4>
            <br></br>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="A New Hope">A New Hope</option>
              <option value="The Empire Strikes Back">The Empire Strikes Back</option>
              <option value="Return of the Jedi">Return of the Jedi</option>
              <option value="The Phantom Menace">The Phantom Menace</option>
              <option value="Attack of the Clones">Attack of the Clones</option>
              <option value="Revenge of the Sith">Revenge of the Sith</option>
              <option value="The Force Awakens">The Force Awakens</option>
              <option value="The Last Jedi">The Last Jedi</option>
              <option value="The Rise of Skywalker">The Rise of Skywalker</option>
            </select>
          </label>
          <br></br>
          <Button type="submit" variant="info" value="Submit">Submit</Button>
        </form>
      );
    }
  }

export default Review;