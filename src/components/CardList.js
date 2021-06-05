import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
     /* {}: JavaScript destructuring syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. */
    return (
        <div>
            { robots.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email} 
                    />
                );
            })
            }
        </div>
        
    );
}

export default CardList;


// Map function: https://www.w3schools.com/jsref/jsref_map.asp
// Map function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map