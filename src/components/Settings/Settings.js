import React, { Component } from "react";

class Settings extends Component {
    constructor (props) {
        super(props);

        this.state = {
            player1Name: "",
            player2Name: "",
            winningScore: props.winningScore,
            alternate: props.alternate
        };

        this.handlePlayer1 = this.handlePlayer1.bind(this);
        this.handlePlayer2 = this.handlePlayer2.bind(this);
        this.handleWinning = this.handleWinning.bind(this);
        this.handleAlternate = this.handleAlternate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlayer1(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }

    handlePlayer2(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }

    handleWinning(e) {
        this.setState({ winningScore: e.currentTarget.value });
    }

    handleAlternate(e) {
        this.setState({ alternate: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSave({...this.state});
    }

    render() {
        let { player1Name, player2Name, winningScore, alternate } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>Player 1</label>
                    <input className="form-control" onChange={ this.handlePlayer1 } value={ player1Name } />
                </div>
                <div className="form-group">
                    <label>Player 2</label>
                    <input className="form-control" onChange={ this.handlePlayer2 } value={ player2Name } />
                </div>
                <div className="form-group">
                    <label>Winning Score</label>
                    <input className="form-control" onChange={ this.handleWinning } value={ winningScore } />
                </div>
                <div className="form-group">
                    <label>Alternate Every</label>
                    <input className="form-control" onChange={ this.handleAlternate } value={ alternate } />
                </div>
                <button className="btn btn-primary">Start Game</button>
            </form>
        );
    }
}

export default Settings;