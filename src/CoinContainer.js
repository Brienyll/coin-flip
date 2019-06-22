import React, { Component } from 'react';
import { choice } from './helper';
import Coin from './Coin';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc:"https://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg"},
      {side: 'tails', imgSrc:"https://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg"}
    ]
  };
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
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
      }
    });
  }

  handleClick(e){
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2> Flip A Coin</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin}/>}
        <button onClick={this.handleClick}>Flip Coin!</button>
        
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} Heads 
        and {this.state.nTails} Tails.</p>
      </div>
    )
  }
}


export default CoinContainer;