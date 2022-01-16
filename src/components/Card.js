import React from 'react'

export default function Card(props) {
  return (
    <div className="Card">

      <div className="NFT_container">
        <img id="NFT" src={props.nft} alt="NFT"></img>
      </div>

      <div className="content">
        <h3>{props.title}</h3>
        <p> {props.description}</p>
        <div className="description">
          <div className="stat">
          <img src="./images/icon-ethereum.svg" alt="ethereum"></img>
          <p>{props.price}</p>
          </div>
          <div className="stat">
          <img src="./images/icon-clock.svg" alt="clock"></img>
          <p>{props.days}</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={props.face} alt="avatar"></img>
        <p>Creation of <span style={{color:'rgb(119, 127, 138)'}}>{props.creator}</span></p>
      </div>
    </div>
  )
}
