import React from 'react';

const Input = ({placeholder}) => {
    return (
        <form>
            <input type="text" placeholder={placeholder}/>
        </form>
    );
}

export default Input;
