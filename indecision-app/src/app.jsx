import React from 'react';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const appRoot = document.getElementById('app');
Modal.setAppElement(appRoot); // lets react-modal hide the app from screen readers while open

createRoot(appRoot).render(<IndecisionApp/>);
