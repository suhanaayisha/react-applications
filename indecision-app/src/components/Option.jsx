import React from 'react';

const Option = (props) => (
    <div className='option'>
        <span className='option__count'>{props.count}</span>
        <p className='option__text'>{props.optionText}</p>
        <button 
        className='button--link button--icon'
        aria-label={`Remove ${props.optionText}`}
        title='Remove'
        onClick={()=> props.handleDeleteOption(props.optionText)}
        >
            &times;
        </button>
    </div>
);

export default Option;