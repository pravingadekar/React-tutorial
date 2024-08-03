import React from "react";
import './masterCard.css'

class MasterCard extends React.Component {
    render() {
        let cardStyle = {
            color: 'white',
            backgroundColor: 'blue'
        };
        return (
            <div>
                <h1 style={{ color: 'white', backgroundColor: 'limegreen' }}>I am from Master card using Inline CSS</h1>
                <h1 style={cardStyle}>I am from Master card using Internal CSS</h1>
                <h1 className="green">I am from Master card using External CSS</h1>
            </div>
        )
    }
}
export default MasterCard;