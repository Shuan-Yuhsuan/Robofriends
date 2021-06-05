import React from 'react';

const Card = ({name, email, id}) => { // receives props as argument and destructuring it into name, email & id

    return (    // the className below is a classe from tachyons package
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt='robots' src= {`https://robohash.org/${id}?200x200`} />
                {/* the outer {}: indentify that it's a javascript syntax */}
                {/* the ` ${} `: template strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals */}
            <div>
                <h2> {name} </h2> {/* {}: remember to add the js destructuring syntax */}
                <p> {email} </p>
            </div>
        </div>
    );
}

export default Card;