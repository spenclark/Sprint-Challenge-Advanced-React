import React from 'react'

export const Player = props => {
    return (
        <div className="player-row">
            <p>{props.player.name}</p>
            <p>{props.player.country}</p>
            <p>{props.player.searches}</p>
        </div>
    )
}