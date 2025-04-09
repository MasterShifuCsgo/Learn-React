import React from 'react';
import {createRoot} from 'react-dom/client';

import MyInfo from './components/MyInfo';


const root = createRoot(document.getElementById('root'));

root.render(<MyInfo/>);