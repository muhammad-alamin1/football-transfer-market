import './Player_full_info.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

function PlayerFullInfo(props) {
    const { first_name, last_name, age, gender, country, email, ip_address, salary, transfer_fee, img } = props.player
    // console.log(props)
    return (
        <div className="player">
            <div className="single-player-info">
                <img src={img} alt="player" className="images" />
                <h3>Name: {first_name} {last_name}</h3>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Country:</strong> {country}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>IP Address:</strong> {ip_address}</p>
                <p><strong>Salary:</strong> ${salary} /week</p>
                <p><strong>Market Value:</strong> m<span>&#8364;</span> {transfer_fee}</p>

                <button onClick={()=>props.transferHandler(props.player)} type="button" className="btn btn-white"><FontAwesomeIcon icon={faDollarSign} /> Add Transfer Market</button>
            </div>
        </div>
    )
}
export default PlayerFullInfo