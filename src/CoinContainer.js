import React, { Component } from 'react';

class CoinContainer extends Component {
  static defaultProps = {
    coins = [
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
      mTails: 0
    };
  }

  render() {
    retrun (
      <div className="CoinContainer">
        <h> lrip A Coin</h2>
        <p>Out of {this.state.nFLips} flips, there have been {this.state.nHeads} Heads, 
        and {this.state.nTails} Tails.</p>
      </div>
    )
  }
}


export default CoinContainer;