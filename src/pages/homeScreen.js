import { useSelector } from 'react-redux';
import AddressSearchInput from './../components/searchInput/addressSearchInput';
import { useState } from 'react';
import CardBox from '../components/card/cardBox';
import mainHOC from '../hoc/mainHOC';

function HomeScreen () {

    const [ currentSearch, setCurrentSearch ] = useState('');
    const addressList = useSelector((state) => state.addressSearch);

    return (
        <div className="App">
            <AddressSearchInput setCurrentSearch={ setCurrentSearch } />
            <h4 className='text-left'>Current Select Address</h4>
            <div className="addressWrapper" >
                { 
                    currentSearch.length > 0 ? 
                    <CardBox address={currentSearch} width={"minWidth"} /> :  <span className='alert'>Not Found Selected Address</span>
                }
            </div>
            <h4 className='text-left'>Search History</h4>
            <div className="addressWrapper" >
                { 
                    addressList.length > 0 ? 
                    addressList.map((address, index) => <CardBox address={address.name} width={'maxWidth'}  key={index}/>) :
                    <span className='alert'>Please Fetch Search History</span>
                }
            </div>
        </div>
    );
}

export default mainHOC(HomeScreen);