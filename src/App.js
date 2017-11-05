import React, { Component } from "react";
import { voteReact, voteAngular, voteVuejs } from "./actions";
import "./App.css";

const styles = {
    centerContents: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "row"
    },
    column: {
        display: "flex",
        flexDirection: "column",
        margin: "0 10px",
        textAlign: "center",
    },
    angularBar: {
        backgroundColor: "#dd1b16",
        textAlign: "center"
    },
    reactBar: {
        backgroundColor: "#0fddfa",
        textAlign: "center",
        backgroundImage:
            "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)"
    },
    vuejsBar: {
        backgroundColor: "#dd1b16",
        textAlign: "center"
    }
};
class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    handleVoteAngular = () => {
        this.store.dispatch(voteAngular());
        console.log(this.store.getState());
    };
    handleVoteReact = () => {
        this.store.dispatch(voteReact());
    };
    handleVoteVuejs = () => {
        this.store.dispatch(voteVuejs());
    };
    totalVotes() {
        return (
            this.store.getState().angular +
            this.store.getState().react +
            this.store.getState().vuejs
        );
    }
    getBarPercentage(type) {
        switch (type) {
            case "angular":
                return Math.floor(
                    this.store.getState().angular / this.totalVotes() * 100
                );
            case "react":
                return Math.floor(
                    this.store.getState().react / this.totalVotes() * 100
                );
            case "vuejs":
                return Math.floor(
                    this.store.getState().vuejs / this.totalVotes() * 100
                );
            default:
        }
    }
    votingBarStyle(type) {
        switch (type) {
            case "angular":
                return {
                    width: this.getBarPercentage("angular") + "%"
                };
            case "react":
                return {
                    width: this.getBarPercentage("react") + "%"
                };
            case "vuejs":
                return {
                    width: this.getBarPercentage("vuejs") + "%"
                };
            default:
        }
    }
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div style={styles.centerContents}>
                        <div style={styles.column}>
                            <img
                                src="/imgs/angular-img.png"
                                alt="angular"
                                height="96"
                                className="img-circle"
                            />
                            <button className="btn btn-primary" onClick={this.handleVoteAngular}>
                                angular {this.store.getState().angular}
                            </button>
                            <p>
                                {this.getBarPercentage('angular') || 0}%
                            </p>
                        </div>
                        <div style={styles.column}>
                            <img
                                src="/imgs/react-img.png"
                                alt="react"
                                height="96"
                                className="img-circle"
                            />
                            <button className="btn btn-primary" onClick={this.handleVoteReact}>
                                react {this.store.getState().react}
                            </button>
                            <p>
                                {this.getBarPercentage('react') || 0}%
                            </p>
                        </div>
                        <div style={styles.column}>
                            <img
                                src="/imgs/vuejs-img.png"
                                alt="vuejs"
                                height="96"
                                className="img-circle"
                            />
                            <button className="btn btn-primary" onClick={this.handleVoteVuejs}>
                                vuejs {this.store.getState().vuejs}
                            </button>
                            <p>
                                {this.getBarPercentage('vuejs') || 0}%
                            </p>
                        </div>
                    </div>
                </div>

                <div className="progress">
                    <div
                        className="angular-bar"
                        style={this.votingBarStyle("angular")}
                    />
                    <div
                        className="react-bar"
                        style={this.votingBarStyle("react")}
                    />
                    <div
                        className="vuejs-bar"
                        style={this.votingBarStyle("vuejs")}
                    />
                </div>
            </div>
        );
    }
}

export default App;
