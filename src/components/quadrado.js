import React from 'react'


const style = {
    background: 'lightwhite',
    border: '2px solid darkblue',
    borderRadius: '6px',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({value, onClick}) => (
    <div>
        <button
            onClick={onClick}
            style={style}
        >
            {value}
        </button>   
    </div>
)
export default Square