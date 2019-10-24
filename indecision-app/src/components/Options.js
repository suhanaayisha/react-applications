import React from 'react';
import Option from './Option';

const Options = (props) => (
    //when we create an array in jsx, we have to pass a key,key is a keyword
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
            className='button--link'
            onClick={props.handleDeleteOptions}
            >
            Remove All
            </button>
        </div>
        {props.options.length===0 && <p className='widget__message'>Please add options to get started!</p>}
        {props.options.length!==0 &&
           props.options.map((option,index)=>(
               <Option 
               key={option} 
               optionText={option}
               count={index+1}
               handleDeleteOption={props.handleDeleteOption}
               />
               ))
           } 
             
        
    </div>
);

export default Options;