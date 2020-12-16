import React from 'react';
import CompList from './CompList'
import Pictures from './Pictures'
import Comp from './ComposersText'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Composers extends React.Component {
    // Inicjacja stanu - state
    constructor(props) {    
      // super - odwołuje się do konstruktora klasy, bez niego
      // nie można wykorzystać this - wynik będzie undefined
      super(props);
      // state - czyli miejsce gdzie przechowywane są wartości
      // które należą do danego komponentu
      this.state = {
        events: [
          { id: 1, name: "Ludwig", surname: "van Beethoven", born: "1770", popular: "Symphony No. 9 in D Minor, Op. 125"},
          { id: 2, name: "Johann Sebastian", surname: "Bach", born: "1685", popular: "Prelude in C Major" },
          { id: 3, name: "Wolfgang Amadeus", surname: "Mozart", born: "1756", popular: "The Marriage of Figaro" },
          { id: 4, name: "Johannes", surname: "Brahms", born: "1833", popular: "Symphony No. 3 in F Major" },
          { id: 5, name: "Richard", surname: "Wagner", born: "1813", popular: "The Flying Dutchman" },
          { id: 6, name: "Claude", surname: "Debussy", born: "1862", popular: "Clair de lune" },
          { id: 7, name: "Pyotr Ilyich", surname: "Tchaikovsky", born: "1840", popular: "Swan Lake" },
          { id: 8, name: "Frédéric", surname: "Chopin", born: "1810", popular: "Nocturne, Op. 9 No. 2 in E-flat Major" },
          { id: 9, name: "Antonio", surname: "Vivaldi", born: "1678", popular: "Mandolin Concerto in C Major" }
        ]
      };
    }
  
    render() {      
        const composers = this.state.events.map(cp => {      
            return <CompList key={cp.id} name={cp.name} surname={cp.surname} born={cp.born} popular={cp.popular} />
      })
        return(
        <Grid container spacing={2} style={{margin: 3}}>
          <Grid item xs={6}>
            <Paper elevation={3}>{composers}</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper elevation={3}>
              <Comp />
              <Pictures />              
            </Paper>
          </Grid>
        </Grid>           
        )
    }
}

export default Composers;