import './playerDetails.css'
import React, { useEffect, useState } from 'react'
import fakeData from '../../fakeData/RealMadrid.json'
import PlayerFullInfo from '../Player_Full_info/Player_full_info'
import Card from '../Card/Card'

const PlayerDetails = () => {
    const [players, setPlayer] = useState([])
    const [cart, setCart] = useState([])
    // console.log(fakeData)
    useEffect(() => {
        setPlayer(fakeData)
    }, [])

    // btn event handler
    const transferHandler = (player) => {
        // console.log('click')
        const newPlayer = [...cart, player]
        setCart(newPlayer)
    }

    return (
        <div >
            <div className="text-center  club-info">
                <h1>Real Madrid Club de Futbol</h1>
            </div>
            <h4 className="text-center text-white mt-5">Data Load : {players.length}</h4>
            <div className=" d-flex">
                <div className="player-info">
                    {
                        players.map(player => <PlayerFullInfo player={player} transferHandler={transferHandler} key={player.id} />)
                    }
                </div>
                <div className="transfer-market-info">
                    <Card cart={cart} />
                </div>
            </div>
        </div>
    )
}
export default PlayerDetails
