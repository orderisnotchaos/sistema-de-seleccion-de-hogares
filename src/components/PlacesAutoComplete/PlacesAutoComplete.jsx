
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";

import {Combobox,
        ComboboxInput,
        ComboboxPopover,
        ComboboxList,
        ComboboxOption} from "@reach/combobox";

import "@reach/combobox/styles.css";

import './PlacesAutoComplete.css';
export default function PlacesAutoComplete({ setSelected }){
    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions,
    } = usePlacesAutocomplete();


    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0]);
        setSelected({lat, lng});
    }

    return (<>
            <Combobox onSelect={ handleSelect }>
                <ComboboxInput value = {value} onChange={(e) => setValue(e.target.value)} disabled={!ready} placeholder="Ingrese una dirección" className = "combobox-input"/>
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map(({id, description}) => <ComboboxOption key={id} value={description} />)}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        
            </>);
}