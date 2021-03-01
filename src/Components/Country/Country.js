import React from 'react';

const Country = (props) => {
    return (
        <div style={{ border: "1px solid red", backgroundColor: "goldenrod", padding: "10px", borderRadius: "10px",marginBottom:"5px" }}>
            <h1>{props.Country.name}</h1>
            <h4>{props.Country.capital}</h4>
        </div>
    );
};

export default Country;