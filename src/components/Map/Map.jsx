
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import './Map.css';
import ThemeContext from "../../contexts/themeContext";
import { useEffect, useState, useContext } from "react";

import PlacesAutoComplete from "../PlacesAutoComplete/PlacesAutoComplete";
export default function Map(){

    const themeContext = useContext(ThemeContext);

    const {isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyDc5NZK26gVQzfPlgcbeLro0zDVxEKu4S4',libraries:["places"]});

    const [selected, setSelected] = useState(null);

    const [properties, setProperties] = useState([]);
    const center = {lat:-34.515210, lng:-58.610759};

    useEffect(() => {
        fetch(themeContext.APIURL + '/properties', {
            method: 'GET',
            headers: {'Content-Type':'application/json','Authorization':themeContext.token},
            mode: 'cors'
        })
        .then(res => res.json())
        .then(data => {
            setProperties(data);
        });
    }, []);

    if(!isLoaded) return <div>Loading...</div>;
  
    return (
        <>
            <div className="places-container">
                <PlacesAutoComplete setSelected = {setSelected}/>
            </div>

            <GoogleMap zoom={selected !== null ? 15: 12} center={selected !== null ? selected : center} mapContainerClassName="map-container">

                {selected && <Marker position={selected} />}
                {properties.map(([property,key]) => {
                    return <Marker key={key} position={{lat:property.lat, lng:property.lng}}/>
                })}
            </GoogleMap>
        </>
    );
}