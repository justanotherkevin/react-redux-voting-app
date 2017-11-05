import React, { Component } from 'react';
import {voteReact,voteAngular,voteVuejs } from './actions';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    handleVoteAngular = () => {
        this.store.dispatch(voteAngular());
    }
    handleVoteReact = () => {
        this.store.dispatch(voteReact());
    }
    handleVoteVuejs = () => {
        this.store.dispatch(voteVuejs());
    }
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <button onClick={this.handleVoteAngular}>
                        angular
                    </button>
                    <button onClick={this.handleVoteReact}>
                        react
                    </button>
                    <button onClick={this.handleVoteVuejs}>
                        vuejs
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
