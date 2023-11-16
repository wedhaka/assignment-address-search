import { useDispatch } from 'react-redux';
import { useEffect, useRef } from "react";
import { addressStore, addressGetAll } from '../../actions/searchAction'
import { Button } from '@mui/material';

function AddressSearchInput ({setCurrentSearch}) {
    
    const autoCompleteRef = useRef();
    const inputRef = useRef(null);
    const options = {
        fields: ["address_components"],
        types: ["address"],
    };

    const address = {
        address: "Dehiwala, Sri Lanka",
    };

    const dispatch = useDispatch();

    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, options);
        autoCompleteRef.current.addListener("place_changed", fillInAddress);
    }, []);

    function fillInAddress() {
        // const place = autoCompleteRef.current.getPlace();
        dispatch(addressStore(inputRef.current.value))
        setCurrentSearch(inputRef.current.value);
        inputRef.current.value = '';
        // console.log(place['address_components'], 'address', inputRef.current.value);
    }

    return (
        <div className="wrapper">
            <h3 className='title'>Find Address Here</h3>
            <input
                id='autocomplete'
                ref={inputRef}
                className='search-input'
            />
            <Button variant="text" className='cardtitle' onClick={() => dispatch(addressGetAll(address))}>Fetch Search History</Button>
        </div>
    )
}

export default AddressSearchInput;