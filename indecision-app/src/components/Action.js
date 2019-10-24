import React from 'react';

const Action = (props) => (
    <div>
        <button 
        onClick={props.handlePick}
        className='big-button'
        disabled={!props.hasOption}
        >
            What should I do?
        </button>
    </div>
);

export default Action;