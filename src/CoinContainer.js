import React, { Component } from 'react';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc:"https://tinyurl.com/react-coin-heads-jpg"},
      {side: 'tails', imgSrc:"https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {

  }

  handleClick(e){
    this.flipCoin()
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2> Flip A Coin</h2>
        <button onCLick={this.handleClick}>Flip Coin!</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} Heads 
        and {this.state.nTails} Tails.</p>
      </div>
    )
  }
}


export default CoinContainer;