// 
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss'


//we have to use it to render any element
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));
















// class OldSyntax{
//     constructor(){
//         this.name='suhana';
//     }
// } IndecisionApp

// const oldSyntax=new OldSyntax();
// console.log(oldSyntax);

// //-------//

// class NewSyntax{
//     name='suhana'; //define property without let or const. we are able to do this because we installed babel-plugin-transform-classes
// }
// const newSyntax=new NewSyntax();
// console.log(newSyntax);