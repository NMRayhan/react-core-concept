import React from 'react';
import './Country.css'

const countryStyle = { border: "1px solid red", backgroundColor: "gainsboro", borderRadius: "10px", marginBottom: "5px" }
const Country = (props) => {
    const { name, capital, region, flag } = props.Country;
    const handle = props.handleCountry
    // const { addCountry } = props.addCountryHandle
    return (
        <div style={countryStyle} className="countrys">
            <div className="country">
                <h2>Country: {name}</h2>
                <h4>Capital: {capital}</h4>
                <p>Region: {region}</p>
                <img src={flag} alt="" />
                <div className="d-grid gap-2" style={{ marginBottom: "20px" }}>
                    <button type="button" className="btn btn-outline-info mr-2" onClick={() => handle(props.Country)} >Add</button>
                </div>
            </div>
        </div>
    );
};

export default Country;