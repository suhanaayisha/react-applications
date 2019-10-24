import React from 'react';

const Option = (props) => (
    <div className='option'>
    {props.optionText && <p className='option__text'>{props.count}. {props.optionText}</p>}
        {props.optionText && 
        <button 
        className='button--link'
        onClick={(e)=> {
            props.handleDeleteOption(props.optionText);
        }
            }>
            remove
        </button>
    }
    </div>
);

export default Option;