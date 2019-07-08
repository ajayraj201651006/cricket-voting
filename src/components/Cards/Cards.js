import React, { Component } from 'react';
import axios from '../../axios-create';
import { Link, Redirect } from 'react-router-dom';

class Cards extends Component {

    state =  {
        player: ''
    }

    voteSubmitHandler = (event) => {
       event.preventDefault();
       const data = {
           player: this.state.player
       }
       if(data.player !== '') {
       axios.post('/.json', data).then(res => {
           console.log(res);
           alert('Submitted');
       }).catch(err => {
           console.log(err);
       })
    }
    }

    render() {
        let inputClasses1 = ['card'];
        let inputClasses2 = ['card'];
        let inputClasses3 = ['card'];
        let inputClasses4 = ['card'];
        if(this.state.player === 'sachin') {
            inputClasses1.push('card_1')
        }

        if(this.state.player === 'dhoni') {
            inputClasses2.push('card_1')
        }

        if(this.state.player === 'rohit') {
            inputClasses3.push('card_1')
        }

        if(this.state.player === 'virat') {
            inputClasses4.push('card_1')
        }

        return (
           <div className="cards">
              <h2>Choose Your Favourite Crickter...Click to Vote!</h2>
              <form onSubmit={this.voteSubmitHandler}>
              <div className={inputClasses1.join(' ')}>
                <label>
                <input type="radio" name="radio1" 
                    onChange={() => {
                        this.setState({player: 'sachin'});
                    }}/>
                  Sachin Tendulakar
                </label>
              </div>
              <div className={inputClasses2.join(' ')}>
                <label>
                <input type="radio" name="radio1" 
                    onChange={() => {
                        this.setState({player: 'dhoni'});
                    }}/>
                  MS Dhoni
                </label>
              </div>
              <div className={inputClasses3.join(' ')}>
                <label>
                    <input type="radio" name="radio1" 
                        onChange={() => {
                            this.setState({player: 'rohit'});
                        }}/>
                    Rohit Sharma
                    </label>
              </div>
              <div className={inputClasses4.join(' ')}>
                <label>
                    <input type="radio" name="radio1" 
                        onChange={() => {
                            this.setState({player: 'virat'});
                        }}/>
                    Virat Kohli
                    </label>
              </div>
              <div>
                <button type="submit">Submit Vote</button>
                <Link style={{textDecoration: 'none'}}
                    to="/votepoll"><button>View Votes</button></Link>
              </div>
              </form>
          </div>
        );
    }
}

export default Cards;