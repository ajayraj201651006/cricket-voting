import React, { Component } from 'react';
import './VotePoll.css';
import axios from '../../axios-create';
import { Bar, Line, Pie} from 'react-chartjs-2';


class VotePoll extends Component {

    state = {
        Players: [],
        sachin: 0,
        dhoni: 0,
        rohit: 0,
        virat: 0,
        chartData: {
            labels: ['Sachin', 'MS Dhoni', 'Rohit', 'Virat'],
            datasets: [
            {
               label: 'Voting Poll',
               data: [],
               backgroundColor: [
                   'green',
                   'green',
                   'green',
                   'green'
               ]
            }
            ]
        }
    }

    componentDidMount () {
        axios.get('/.json').then(res => {
            console.log(res);
            const fetchedPlayers = [];
            for (let key in res.data) {
                fetchedPlayers.push({
                    ...res.data[key],
                     id: key});
            }
            this.setState({Players: fetchedPlayers});
            this.state.Players.map(plr => {
                if(plr.player === 'sachin') {
                    this.state.sachin = this.state.sachin + 1
                }

                if(plr.player === 'dhoni') {
                    this.state.dhoni = this.state.dhoni + 1
                }

                if(plr.player === 'rohit') {
                    this.state.rohit = this.state.rohit + 1
                }

                if(plr.player === 'virat') {
                    this.state.virat = this.state.virat + 1
                }
            })
            this.setState({
                chartData: {
                    labels: ['Sachin', 'MS Dhoni', 'Rohit', 'Virat'],
            datasets: [
            {
               label: 'Voting Poll',
               data: [
                   this.state.sachin, 
                   this.state.dhoni, 
                   this.state.rohit, 
                   this.state.virat
                ],
               backgroundColor: [
                   'green',
                   'green',
                   'green',
                   'green'
               ]
            }
            ]
                }
            });
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="VotePoll">
                <h1>Voting Poll</h1>
                <Bar 
                  data={this.state.chartData}  
                  options={{
                     maintainAspectRatio: false,
                     scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "white",
                                fontSize: 18,
                                // stepSize: 1,
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "white",
                                fontSize: 16,
                                stepSize: 1,
                                beginAtZero: true
                            }
                        }]
                    }
                  }}/>
            </div>
        );
    }
}

export default VotePoll;