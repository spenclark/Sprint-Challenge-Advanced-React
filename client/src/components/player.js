import React from 'react'

const Player = props => {
    return (
        <div className="player-row">
            <div className="player-cell">
            <p>{props.player.name}</p>
            </div>
            <div className="player-cell">
            <p>{props.player.country}</p>
            </div>
            <div className="player-cell">
            <p>{props.player.searches}</p>
            </div>
        </div>
    )
}

export default Player