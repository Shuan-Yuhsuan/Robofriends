import React from 'react';

// onchange event: https://www.w3schools.com/jsref/event_onchange.asp

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange= {searchChange}
            />
        </div>
    );
}

export default SearchBox;