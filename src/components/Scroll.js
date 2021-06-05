import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', border: '1px solid black', height: '800px'}}>    {/* the outer {} -> jsx expression, the inner {} -> an object https://www.w3schools.com/react/react_css.asp */}
            {props.children}    {/* Since we wrap it around the CardList in App.js, Scroll component has to receive & render it's children*/}
        </div>
    )
};

export default Scroll;