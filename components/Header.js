import Head from 'next/head'
import Link from 'next/link'
import React, {Component} from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleNumber = this.handleNumber.bind(this)
    this.state = {num: 3}
  }

  handleNumber(e) {
    this.setState({num: e.target.value})
  }

  render () {
    return (
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Coding Challenge</title>
          <meta name="description" content="Pig Knows Coding Challenge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" sizes="152x152" href="./static/favicon_package/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./static/favicon_package/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./static/favicon_package/favicon-16x16.png" />
          <link rel="manifest" href="./static/favicon_package/site.webmanifest" />
          <link rel="mask-icon" href="./static/favicon_package/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="stylesheet" href="./static/css/normalize.css" />
          <script defer src="./static/FontAwesome/js/fontawesome-all.js"></script>
          <link rel="stylesheet" href="./static/css/animate.css" />
          <link rel="stylesheet" href="./static/css/index.css" />
        </Head>
        <header className="headWrap fadeIn animated">
  				<div className="snout mar15">
  					<img
  						src="./static/img/pig-nose_1f43d.png"
  						alt="a picture of a pig snout"
  					/>
  				</div>

  				<div className="pad15 mar15 numWrap">
  					<label htmlFor="userNum">Number of Users:</label>
  					<input
  						id="userNum"
              ref="userNum"
  						type="number"
  						defaultValue="3"
  						min="3"
              onChange={this.handleNumber}
  					/>
  				</div>

  				<div className="numBtnWrap mar15">
            <Link as={'/'} href={`/?num=${ this.state.num }`} replace>
    					<button
    						className="numBtn"
    						title="Click to update user list"
    					>
    						<i className="fas fa-arrow-right"></i>
    					</button>
            </Link>
  				</div>
  			</header>

        <style jsx>{`
          header {
            background-color: #ECEFF1;
            font-size: 2rem;
            border-bottom: 2px solid white;
            box-shadow:  0 0 7px 4px rgba(0,0,0,0.5);
          }
          .headWrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }

          .snout {
            display: flex;
            flex: 1;
          }
          .snout img {
            height: 50px;
            margin: auto;
          }

          .numWrap {
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          #userNum {
            border: none;
            border-bottom: 1px solid;
            background-color: transparent;
            text-align: center;
            width: 8rem;
            margin-left: 15px;
          }
          #userNum:focus {
            border-bottom-color: #03A9F4;
            background-color: white;
          }

          .numBtnWrap {
            display: flex;
            flex: 1;
          }
          .numBtn {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
            margin: auto;
            color: #2196F3;
            border: 1px solid;
            border-radius: 100%;
            cursor: pointer;
          }
          .numBtn:hover {
            color: white;
            background-color: #2196F3;
          }
          .numBtn:active {
            opacity: 0.75;
          }
          .numBtn:focus {
            outline: none;
          }
        `}</style>
      </div>
    )
  }
}

let num = 3

function updateNum(e) {
  console.log('UPDATE NUM e.target.value: ', e.target.value);
  num = e.target.value
}

export default Header
