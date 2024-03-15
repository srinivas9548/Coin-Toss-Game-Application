import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    isHead: true,
  }

  onSpinTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({
      totalCount: prevState.totalCount + 1,
      headsCount: prevState.headsCount + (tossResult === 0 ? 1 : 0),
      tailsCount: prevState.tailsCount + (tossResult === 1 ? 1 : 0),
      isHead: tossResult === 0,
    }))
  }

  render() {
    const {isHead, totalCount, headsCount, tailsCount} = this.state
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="probability-text">Heads (or) Tails</p>

          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="toss-image"
            />
          )}

          <button
            type="button"
            className="toss-coin-button"
            onClick={this.onSpinTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {headsCount}</p>
            <p className="result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
