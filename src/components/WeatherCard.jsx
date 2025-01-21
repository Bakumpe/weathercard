import React from "react";

function WeatherCard({ cityName, condition, comment, temperature, image }) {
    const cardStyle = { 
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover', // Ensure the image covers the entire element 
        backgroundPosition: 'center', // Center the image 
        padding: '20px', // Add padding inside the card 
        borderRadius: '10px', // Optional: Add rounded corners 
        height: '100%', // Optional: Set the height of the card    
        
    };
   
   
    return (
        <>
            <div className="card">
                <div style={cardStyle}>
                    <div className="card-content">
                    <h2>{cityName}</h2>
                    <h3>{condition}</h3>
                    <h1>{temperature}</h1>
                    </div>
                    
                    <h4>{comment}</h4>
                </div>
            </div>
        </>
    );
}

export default WeatherCard;
